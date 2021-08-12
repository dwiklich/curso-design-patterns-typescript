import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido (CLASS)');
  } else {
    console.log('Email inválido (CLASS)');
  }
}

function validaEmailFN(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email válido (FN)');
  } else {
    console.log('Email inválido (FN)');
  }
}

const email = 'd.wiklich@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFN(emailValidatorFnAdapter, email);

console.log('------------');

const validacaoEmailClass = new EmailValidatorClassAdapter();
console.log(validacaoEmailClass.isEmail(email), '(CLASS)');
console.log(emailValidatorFnAdapter(email), '(FN)');
