import { useField } from 'formik';
import React from 'react';
import { FormikSelectInputProps, Select } from '../select';

export const FormikSelect = (props: FormikSelectInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Select {...field} {...props} error={error} />;
};
