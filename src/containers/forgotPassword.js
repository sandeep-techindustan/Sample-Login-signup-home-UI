import React from 'react'
import ForgotPasswordForm from '../components/forgotPasswordForm'
import validateInput from '../utilities/validations/forgotPassword';
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: ''
      },
      errors: {},
      message: '',
      errors: ''
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
    user[key] =e.target.value;
    this.setState({ user });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state.user);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  render () {
    const {user, errors, message, error } = this.state;
    return (
      <div className="forgot-password-Background">
      <Row>
        <Col md={8}>

        </Col>
        <Col md={4}>
          <div className="transparent1 margin-top">
            <div className="padding-20">
              <div className="center"><Image className="loginImage" src="http://www.grantbrook.com/images/emailIcon.png" alt="Register Here!" />
              </div>

              <div className="title-top">
								<span>Do you Forgotten Your Password?</span>
							</div>

              <div className="border-bottom"></div>

							<div className="border-bottom-small"></div>

							<div className="separator">
								<hr />
							</div>
              <div className="forgot-note">
                <h3>Enter Your registered email below, then we will generate and send an password reset link to that email.</h3>
              </div>
              <ForgotPasswordForm
                handleSubmit={this.handleSubmit}
                onChange={this.onChange}
                user={user}
                errors={errors}
                message={message}
                error={error}
              />

              <div className="separator">
								<hr />
							</div>
              <div className="center">
              <h4>Or</h4>
              <Link to="/signup"><h3 style={{'color':'white'}}>Create New?</h3></Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </div>
    )
  }
}
