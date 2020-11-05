import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/index';

class SignUpForm extends Component {
  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="text-danger">{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.signup(values, (data) => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/');
    });
  }

  render() {
    const { auth, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>Sign Up</h2>

        <div>{auth.token}</div>
        <Field label="Email" name="email" type="email" component={this.renderField} />
        <Field label="Password" name="password" type="password" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <Link to="/" className="btn btn-danger" style={{ margin: 10 + 'px' }}>
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Enter an email';
  }
  if (!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(
    (state) => ({
      auth: state.auth
    }),
    { signup }
  )(SignUpForm)
);
