import React, { Component } from 'react'
import SignUpForm from '../components/signUpForm'
import validateInput from '../utilities/validations/signUp'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/common/footer'

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				username:'',
				email: '',
				password: ''
			},
			errors: {},
			message: '',
			error: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.isValid()) {
			console.log(this.state.user)
		}
	}

	onChange = (key, e) => {
		let { user } = this.state;
		user[key] = e.target.value;
		this.setState({ user });
	}

	isValid = () => {
		const { errors, isValid } = validateInput(this.state.user);

		if(!isValid) {
			this.setState({ errors });
			console.log('error')
		}

		return isValid;
	}

	render() {
		const { user, errors, message, error } = this.state;
		return (
			<div className="signupBackground">
			<Row>
				<Col md={8}></Col>
				<Col md={4}>
					<div className="transparent margin-top">
						<div className="padding-20">
							<div className="center"><Image className="loginImage" src="https://d2n3notmdf08g1.cloudfront.net/common/icons/Icon-Register.png" alt="Register Here!" />
							</div>

							<div className="title-top">
								<span>Sign up</span>
							</div>

							<div className="border-bottom"></div>

							<div className="border-bottom-small"></div>

							<div className="separator">
								<hr />
							</div>

							<SignUpForm
								handleSubmit={this.handleSubmit}
								onChange={this.onChange}
								user={user}
								errors={errors}
								message={message}
								error={error}
							/>

							<div className="center">
								<div className="spacer-20"></div>
								<div className="spacer-20"></div>
								Already a member? <Link to="/login">Login Now!</Link>
							</div>

							<div className="separator">
								<hr />
							</div>

						</div>
					</div>
				</Col>
			</Row>
				<Footer />
			</div>
			)
	}
}

export default SignUp
