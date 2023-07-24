import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export const RegisterFormFiels = () => {
  const { errors, handleSubmit } = useForm()
  const { value: email } = useField('email', yup.string().email().required(), { initialValue: '' })
  const { value: password } = useField(
    'password',
    yup
      .string()
      .required('required field!')
      .min(8, 'min 8 chars')
      .test('hasUppercase', 'uppercase error', (value) => /[A-Z]/.test(value))
      .test('hasLowercase', 'lowercase error', (value) => /[a-z]/.test(value))
      .test('hasNumber', 'number error', (value) => /[0-9]/.test(value))
      .test('hasSpecialChar', 'special char error', (value) =>
        /[!•"#$%&'’*+,./:;=_?@^`|~]/.test(value)
      ),
    {
      initialValue: ''
    }
  )

  return {
    errors,
    handleSubmit,
    email,
    password
  }
}
