import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Error {
  const validationErrors: Error = {};

  err.inner.forEach((error) => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
