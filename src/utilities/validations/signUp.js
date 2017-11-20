import Validator from 'is_js';
import { isEmpty } from 'lodash';

export default function validateInput(data, hidePassword) {
  let errors = {};


  if (Validator.empty(data.username)) {
    errors.username = 'Username is required';
  }

  if (Validator.empty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    errors.email = 'Invalid Email';
  }

  if (Validator.empty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
