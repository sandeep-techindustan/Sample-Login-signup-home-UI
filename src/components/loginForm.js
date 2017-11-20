import React from 'react'
import { Form } from 'react-bootstrap'
import InputField from './common/InputField'
import FormButton from './common/FormButton'
import FormAlert from './common/FormAlert'

const LoginForm = (props) => {
	const {
		handleSubmit,
		onChange,
		user,
		error,
		message,
		errors,
	} = props;

	return (
		<div>
			<Form onSubmit={ handleSubmit }>
				{message || error?<FormAlert showAlert={true} message={message || error} bsStyle={message?'success':'danger'} />:null}

				<InputField 
					type="text"
					value={user.email}
					placeholder="User Email"
					required={true}
					md={12}
					id="email"
					onChange = {onChange.bind(this, 'email')}
					error = {errors.email}
				/>

				<InputField
					type="password"
					value={user.password}
					placeholder="password"
					required={true}
					md={12}
					id="password"
					onChange = {onChange.bind(this, 'password')}
					error={errors.password}
				/>
				
				<FormButton
					title="Login"
					type="submit"
					bsStyle="success"
					block="block"
					md={12}
				/>
			</Form>
		</div>
		)
}


export default LoginForm