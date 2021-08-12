import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  email: string,
): boolean => {
  return isEmail(email);
};
