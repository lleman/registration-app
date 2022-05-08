import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  passwordConfirmation: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password')], "Password doesn't match"),
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Password must be at least 6 characters'),
  email: yup
    .string()
    .required('This field is required')
    .email('Please enter a valid email'),
});
