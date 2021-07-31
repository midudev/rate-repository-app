import { useApolloClient } from '@apollo/client'
import { useEffect } from 'react'
import { useHistory } from 'react-router-native'
import authStorage from '../utils/authStorage.js'

export default function SignOut () {
  const apolloClient = useApolloClient()
  const history = useHistory()

  useEffect(() => {
    async function signOut () {
      await authStorage.removeAccessToken()
      await apolloClient.resetStore()
      history.push('/')
    }

    signOut()
  }, [])
  
  return null
}