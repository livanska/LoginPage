import { FormikInput, InputProps } from '../../models/formik';
import css from './Choice.module.scss';

export interface FormikChoiceInputProps extends FormikInput<InputProps> {
  type?: 'radio' | 'checkbox';
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export const FormikChoiceInput = ({ label, error, ...props }: FormikChoiceInputProps) => {
  return (
    <div>
      <label>
        <input {...props} />
        <span>{label}</span>
        {error && <p className={css.errorText}>{error}</p>}
      </label>
    </div>
  );
};
