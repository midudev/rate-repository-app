import React from 'react'
import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyledText.jsx'
import { loginValidationSchena } from '../validationSchemas/login.js'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})

export const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials'
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const SignInForm = ({ handleSubmit, isSubmitting, status }) => {
  return (
    <View style={styles.form}>
      <FormikInputValue
        autoCapitalize='none'
        name='email'
        placeholder='E-mail'
        testID='SignInFormEmail'
      />
      <FormikInputValue
        name='password'
        placeholder='Password'
        secureTextEntry
        testID='SignInFormPassword'
      />
      <Button testID='SignInFormSubmit' disabled={isSubmitting} onPress={handleSubmit} title='Log In' />

      {status === FORM_STATUS.wrongCredentials
        ? <StyledText style={styles.error}>Wrong credentials</StyledText>
        : null}

    </View>
  )
}

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      component={SignInForm}
      validationSchema={loginValidationSchena}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default LoginForm
