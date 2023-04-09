import { FieldErrors } from 'react-hook-form';

function getFormError(errors: FieldErrors, fieldName: string): string | undefined {
  const errorMessage = errors[fieldName]?.message;

  if (errorMessage) {
    return errorMessage.toString();
  }
}

export default getFormError;
