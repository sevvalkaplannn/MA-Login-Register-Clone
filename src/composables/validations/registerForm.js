import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export const RegisterFormFiels = () => {
    const { errors, handleSubmit } = useForm()
    const { value: email } = useField('email', yup.string().email('Email must be valid').required('Email is required'), { initialValue: '' })
    const { value: email_login } = useField('email_login', yup.string().required('Email is required'), { initialValue: '' })
    const { value: password } = useField(
        'password',
        yup
        .string()
        .required('Password is required')
        .min(8, 'Password length must be at least 8')
        .test('hasUppercase', 'Password must contain at least one upper case character', (value) => /[A-Z]/.test(value))
        .test('hasLowercase', 'Password must contain at least one lower case character ', (value) => /[a-z]/.test(value))
        .test('hasNumber', 'Password must contain at least one digit character', (value) => /[0-9]/.test(value))
        .test('hasSpecialChar', 'Password must contain at least one special character', (value) =>
            /[!•"#$%&'’*+,./:;=_?@^`|~]/.test(value)
        ), {
            initialValue: ''
        }
    )
    const { value: password_login } = useField(
        'password_login',
        yup
        .string()
        .required('Password is required'), {
            initialValue: ''
        }
    )

    return {
        errors,
        handleSubmit,
        email,
        email_login,
        password,
        password_login
    }
}