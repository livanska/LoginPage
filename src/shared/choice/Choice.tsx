import { FormikInput, InputProps } from '../../models/formik';

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
        {error && <div>{error}</div>}
      </label>
    </div>
  );
};
