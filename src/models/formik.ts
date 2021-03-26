export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email';
  autoComplete?: 'off';
  error?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

export type FormikInput<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur'>;
