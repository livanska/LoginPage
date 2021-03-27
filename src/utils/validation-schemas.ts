import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Min 3 chars')
    .max(15, 'Max 15 chars')
    .required('Valid first Name is required'),
  lastname: Yup.string()
    .min(3, 'Min 3 chars')
    .max(15, 'Max 15 chars')
    .required('Valid last name is required'),
  username: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 15 chars').required('Your username is required'),
  address1: Yup.string()
    .min(5, 'Min 5 chars')
    .max(64, 'Max 64 chars')
    .required('Please enter your shipping address'),
  address2: Yup.string().min(5, 'Min 5 chars').max(64, 'Max 64 chars').optional(),
  email: Yup.string()
    .email('Invalid email')
    .required('Pleas enter a valid email address for shipping updates'),
  country: Yup.string().required('Please select a valid country'),
  state: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 24 chars').optional(),
  zip: Yup.string().length(5, 'Zip code must have 5 numbers').required('Zip code required'),
  payment: Yup.number().required('Choose payment type')
});
