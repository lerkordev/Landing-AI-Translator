import { Outlet } from 'react-router-dom'
import useAuth from '@/modules/auth/hooks/useAuth'
import { Container } from '@/modules/core/ui/container'
import HeaderComponent from '@/modules/core/components/site-header/header'
import Footer from '@/modules/core/components/footer/footer'

export default function AppLayout() {
  // useAuth()

  return (
    <>
      <HeaderComponent />
      {/* <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8 box-border"> */}
      <Outlet />
      {/* </Container> */}
      <Footer />
    </>
  )
}
