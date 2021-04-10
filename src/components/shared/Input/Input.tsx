import React from 'react';

import { FormikInput, InputProps } from '../../../models/formik';

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export const Input = ({ label, error, ...props }: FormikTextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && <p>{error}</p>}
    </div>
  );
};
