import React from 'react';
import { Form } from 'react-bootstrap';
import css from './Select.module.scss';
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
      <Form.Label className={css.left}>{label}</Form.Label>
      <Form.Control as='select' {...props}>
        <option value={''} disabled={true} hidden={true} label={'Choose...'} />
        {options.map(option => (
          <option value={option} label={option} />
        ))}
      </Form.Control>
      {error && <p className={css.errorText}>{error}</p>}
    </div>
  );
};
