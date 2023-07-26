import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export const LoginFormFiels = () => {
    const { errors, handleSubmit } = useForm()
    const { value: email } = useField('email', yup.string().required('Email is required'), { initialValue: '' })
    const { value: password } = useField(
        'password',
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
        password,
    }
}