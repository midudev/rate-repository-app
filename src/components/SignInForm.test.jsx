import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import SignInForm from './SignInForm.jsx'

describe('SignInForm', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />)

    fireEvent.changeText(getByTestId('SignInFormEmail'), 'midudev@gmail.com')
    fireEvent.changeText(getByTestId('SignInFormPassword'), '12345678')
    fireEvent.press(getByTestId('SignInFormSubmit'))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)

      const { mock: { calls } } = onSubmit
      const [firstCall] = calls
      const [firstArg] = firstCall

      expect(firstArg).toEqual({
        email: 'midudev@gmail.com',
        password: '12345678'
      })
    })
  })
})
