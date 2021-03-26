import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  firstname: Yup.string().min(3, 'Min 3 chars').max(10, 'Max 10 chars').required(),
  lastname: Yup.string().min(3, 'Min 3 chars').max(10, 'Max 10 chars').required(),
  email: Yup.string().email('Invalid email').required()
});
