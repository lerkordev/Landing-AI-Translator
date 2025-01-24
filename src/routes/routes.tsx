import { Loader } from '@/modules/core/icons'
import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { Routes } from '.'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import { useBoundStore } from '@/store/index'
import IsLogged from './guard/isLogged'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from '@/screens/errorPage'
import logError from '@/logging'

const Home = lazy(() => import('@/screens/home'))
// Auth
const LogIn = lazy(() => import('@/screens/auth/logIn'))
const SignUp = lazy(() => import('@/screens/auth/signUp'))
// User
const UserProfile = lazy(() => import('@/screens/user/profile'))
const NotFoundPage = lazy(() => import('@/screens/notFoundPage'))
const LoggedExampleScreen = lazy(() => import('@/screens/loggedExampleScreen'))
const NewScreen = lazy(() => import('@/screens/newScreen'))
// usar Routes de la siguiente manera: <Link to={Roues.home}>Home</Link>

export default function Navigator() {
  const { setUser, setAuthenticated, LoadingRefresh, setLoadingRefresh } = useBoundStore()
  const projectId = import.meta.env.VITE_MORALIS_APP_ID ?? ''

  useEffect(() => {
    const localStorageData = localStorage.getItem(`Parse/${projectId}/currentUser`)
    if (localStorageData) {
      setAuthenticated(true)
      const data = JSON.parse(localStorageData)
      setUser(data)
      return setLoadingRefresh(false)
    }
    setAuthenticated(false)
    return setLoadingRefresh(false)
  }, [setUser, setAuthenticated, setLoadingRefresh])

  if (LoadingRefresh) {
    return (
      <div className="grid w-full h-screen place-content-center">
        <Loader className="h-[1.5rem] w-[1.5rem]" />
      </div>
    )
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
        console.log(details)
      }}
    >
      <Suspense
        fallback={
          <div className="grid w-full h-screen place-content-center">
            <Loader className="h-[1.5rem] w-[1.5rem]" />
          </div>
        }
      >
        <RouterRoutes>
          <Route element={<AppLayout />}>
            <Route path={Routes.home} element={<Home />} />
            <Route path={Routes.newScreen} element={<NewScreen />} />
            <Route path={Routes.user.profile} element={<UserProfile />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path={Routes.logIn} element={<LogIn />} />
            <Route path={Routes.signUp} element={<SignUp />} />
          </Route>
          {/* <Route element={<IsLogged />}> */}
          <Route path={Routes.loggedExample} element={<LoggedExampleScreen />} />
          {/* </Route> */}

          <Route path="*" element={<NotFoundPage />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  )
}
