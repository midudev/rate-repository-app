import React from 'react'
import useSignIn from '../hooks/useSignIn.js'
import { useHistory } from 'react-router-native'
import LoginForm, { FORM_STATUS } from '../components/SignInForm.jsx'

export default function LogInPage () {
  const { signIn } = useSignIn()
  const history = useHistory()

  const handleFormikSubmit = async (values, actions) => {
    actions.setStatus(FORM_STATUS.idle)
    actions.setSubmitting(true)

    try {
      const { email, password } = values
      await signIn({ username: email, password })
      actions.setSubmitting(false)
      history.push('/')
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials)
    }
  }

  return (
    <LoginForm onSubmit={handleFormikSubmit} />
  )
}
