import { useField } from 'formik';
import React from 'react';

import { FormikChoiceInput, FormikChoiceInputProps } from '../choice/Choice';

export const FormikCheckbox = (props: FormikChoiceInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <FormikChoiceInput type='checkbox' {...field} {...props} error={error} />;
};
