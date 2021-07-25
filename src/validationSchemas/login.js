import * as yup from 'yup'

export const loginValidationSchena = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('E-mail is required!!!!!!!'),
  password: yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .required('Password is required')
})
