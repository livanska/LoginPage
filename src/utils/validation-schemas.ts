import * as Yup from 'yup';

export const cityValueSchema = Yup.object().shape({
  city: Yup.string().required('Valid city name is required.')
});
