import { UseFormRegisterReturn } from 'react-hook-form';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactElement;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}
