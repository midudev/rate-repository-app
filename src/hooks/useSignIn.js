import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations.js'
import authStorage from '../utils/authStorage.js'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const [signInMutation] = useMutation(SIGN_IN)
  const apolloClient = useApolloClient()

  const signIn = async ({username, password}) => {
    const { data } = await signInMutation({
      variables: {
        username,
        password
      }
    })

    await authStorage.setAccessToken(data.authorize.accessToken)
    await apolloClient.resetStore()
  }

  return {
    signIn
  }
}

export default useSignIn