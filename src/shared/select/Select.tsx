import React from 'react';
import { FormikInput, InputProps } from '../../models/formik';

export interface FormikSelectInputProps extends FormikInput<InputProps> {
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLSelectElement>): void;
  value?: string;
}

const options = ['Ukraine', 'USA', 'Spain', 'Canada', 'Mexico', 'Australia'];

export const Select = ({ label, error, ...props }: FormikSelectInputProps) => {
  return (
    <div>
      <span>{label}</span>
      <select {...props}>
        <option value={''} disabled={true} hidden={true} label={'Choose...'} />
        {options.map(option => (
          <option value={option} label={option} />
        ))}
      </select>
      {error && <div>{error}</div>}
    </div>
  );
};
