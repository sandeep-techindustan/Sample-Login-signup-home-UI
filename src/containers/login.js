import React, { Component } from 'react'
import LoginForm from '../components/loginForm'
import validateInput from '../utilities/validations/Login'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/common/footer'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
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
			console.log(this.state.user.email)
			console.log(this.state.user.password)
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
			<div className="loginBackground">
				<Row>
				<Col md={4}></Col>

				<Col md={4}>
					<div className="transparent margin-top">
						<div className="padding-20">

							<div className="center"><Image className="loginImage" src="https://www.shareicon.net/download/2016/11/09/851834_security_512x512.png" alt="Login Here" />
							</div>

							<div className="title-top">
								<span>Login</span>
							</div>

							<div className="border-bottom"></div>

							<div className="border-bottom-small"></div>

							<div className="separator">
								<hr />
							</div>

							<LoginForm
								handleSubmit={this.handleSubmit}
								onChange={this.onChange}
								user={user}
								errors={errors}
								message={message}
								error={error}
							/>

							<div className="center">
								<br />
								<h6> Or </h6>
								<Link to="/signup">Register Now!</Link>
							</div>

							<div className="separator">
								<hr />
							</div>

							<div className="center">
								<Link to="/forgotpassword">Forgot Password?</Link>

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

export default Login
