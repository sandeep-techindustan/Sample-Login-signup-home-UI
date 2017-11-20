import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import InputField from '../components/common/InputField'
import FormAlert from '../components/common/FormAlert'
import FormButton from '../components/common/FormButton'

const SignUpForm = (props) => {
  const {
    handleSubmit,
    onChange,
    user,
    errors,
    message,
    error,
  } = props;
  return (
      <div>
        <Form onSubmit={ handleSubmit}>
          {message || error?<FormAlert showAlert={true} message={message || error} bsStyle={message?'success':'danger'} />:null}
            <div>
              <InputField
                type="text"
                value={user.username}
                placeholder="Username"
                required={true}
                md={12}
                id="username"
                onChange={onChange.bind(this, 'username')}
                error={errors.username}
              />

              <InputField
                type="text"
                value={user.email}
                placeholder="Email Address"
                required={true}
                md={12}
                id="email"
                onChange={onChange.bind(this, 'email')}
                error={errors.email}
              />

              <InputField
                type="password"
                value={user.password}
                placeholder="Password"
                required={true}
                md={12}
                id="password"
                onChange={onChange.bind(this, 'password')}
                error={errors.password}
              />

              <Row>
                <Col md={6}>
                  <FormButton
                    title="Sign-up"
                    type="submit"
                    bsStyle="success"
                    md={12}
                    block={true}
                  />
                </Col>
                <Col md={6}>
                  <FormButton
                    title="Cancel"
                    type="reset"
                    bsStyle="warning"
                    md={12}
                    block={true}
                  />
                </Col>
              </Row>
              <div className="spacer-20"></div>
              <FormButton
                title="Sign-up with Google"
                type="submit"
                bsStyle="default"
                md={12}
                block={true}
              />
              <div className="spacer-20"></div>
              <FormButton
                title="Sign-up with FaceBook"
                type="submit"
                bsStyle="info"
                md={12}
                block={true}
              />
            </div>
        </Form>
      </div>
  )
}

export default SignUpForm
