import Validator from 'is_js'
import { isEmpty } from 'lodash'

export default function validateInput(data) {
	let errors = {};

	if(Validator.empty(data.email)) {
		errors.email = "Email is Required";
	}



	if(data.email !=='san') {
		errors.email = 'Invalid Email';
	}

	if(data.password !== '123') {
		errors.password = 'Password is required';
	}




	return {
		errors,
		isValid: isEmpty(errors)
	}

}

// if(!Validator.empty(data.email) && !Validator.email(data.email)) {
// 		errors.email = 'Invalid Email';
// 	}

// 	if(Validator.empty(data.password)) {
// 		errors.password = 'Password is required';
// 	}