import { useField } from 'formik';
import React from 'react';

import { FormikChoiceInput, FormikChoiceInputProps } from '../choice/Choice';

export const FormikRadio = (props: FormikChoiceInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <FormikChoiceInput type='radio' {...field} {...props} error={error} />;
};
