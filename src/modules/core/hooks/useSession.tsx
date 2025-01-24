import { Routes } from '@/routes'
import type { Session, SessionStatus } from '@/types'
import Moralis from 'moralis-v1'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { $SessionStatus } from '../enum'
// import { getUserById } from '@/services/users'

function useSession() {
  const [user, setUser] = useState<Session | null>(null)
  const [status, setStatus] = useState<SessionStatus>($SessionStatus.LOADING)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const currentSession = Moralis.User.current()

      if (!currentSession?.attributes) {
        setStatus($SessionStatus.UNAUTHENTICATED)
        return
      }

      const { id } = currentSession

      const { sessionToken, email, user_type } = currentSession.attributes

      if (!sessionToken) {
        setStatus($SessionStatus.UNAUTHENTICATED)
        return
      }

      setUser({
        id,
        sessionToken,
        email,
        fullName: '',
        username: '',
        type: user_type,
      })

      // getUserById({ id }).then((response) => {
      //   response.data &&
      //     setUser({
      //       id: currentSession.id,
      //       sessionToken,
      //       email: response.data?.email,
      //       fullName: response.data?.fullName,
      //       username: response.data?.username,
      //       type: response.data?.type
      //     })
      // })

      setStatus($SessionStatus.AUTHENTICATED)
    } catch (error) {
      console.error(error)
      setStatus($SessionStatus.UNAUTHENTICATED_ERROR)
    }
    return () => {
      setUser(null)
    }
  }, [])

  const signOut = () => {
    Moralis.User.logOut()
    navigate(Routes.logIn)
    setStatus($SessionStatus.UNAUTHENTICATED)
  }

  return {
    user,
    status,
    signOut,
  }
}

export default useSession
