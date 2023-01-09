import { FieldErrors } from 'react-hook-form';

export function getRequiredField(): string {
  return 'Обязательное поле!';
}

export function maxStringLength(num: number): string {
  return `Максимальная длина ${num} символов!`;
}

export function getError(errors: FieldErrors, fieldName: string): string | undefined {
  const errorMessage = errors[fieldName]?.message;

  if (errorMessage) {
    return errorMessage.toString();
  }
}
