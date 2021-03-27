import React from 'react';
import css from './Input.module.scss';
import { Col, Form, Row } from 'react-bootstrap';
import cn from 'classnames';
import { FormikInput, InputProps } from '../../models/formik';

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const Input = ({ label, error, ...props }: FormikTextInputProps) => {
  return (
    <div>
      <Form.Group>
        <Form.Label className={css.left}>{label}</Form.Label>
        <Form.Control {...props} />
        {error && <p className={cn(css.errorText, css.left)}>{error}</p>}
      </Form.Group>
    </div>
  );
};
