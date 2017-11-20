import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/common/InputField'
import FormButton from '../components/common/FormButton'
import { Form } from 'react-bootstrap'

const ForgotPasswordForm = (props) => {
  const {
    handleSubmit,
    onChange,
    user,
    errors,
    message,
    error
  } = props;

  return (
    <div>
      <Form onSubmit={ handleSubmit }>
        <InputField
          type="input"
          placeholder="Email"
          value={user.email}
          required={true}
          md={12}
          id="email"
          onChange={onChange.bind(this, 'email')}
          error={errors.email}
        />
        <FormButton
          title="Send"
          type="submit"
          bsStyle="success"
          md={12}
          block={true}
        />


      </Form>
    </div>
  )
}
export default ForgotPasswordForm
