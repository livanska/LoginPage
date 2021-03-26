import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  firstname: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 15 chars').required('First Name is required'),
  lastname: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 15 chars').required('Last Name is required'),
  username: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 15 chars').required('Username is required'),
  address1: Yup.string().min(5, 'Min 5 chars').max(64, 'Max 64 chars').required('Address is required'),
  address2: Yup.string().min(5, 'Min 5 chars').max(64, 'Max 64 chars').optional(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country: Yup.string().required()
});
