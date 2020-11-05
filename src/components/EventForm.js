import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../actions/index';

class EventForm extends Component {
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
    this.props.createEvent(values, () => {
      console.log('Event created');
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Name of Event" name="name" type="text" component={this.renderField} />
        <Field label="Description" name="description" type="text" component={this.renderField} />
        <Field label="Date" name="date" type="date" component={this.renderField} />
        <Field label="Number of Attendees (Approx.)" name="count" type="number" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Save
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
  if (!values.name) {
    errors.name = 'Enter a name';
  }
  if (!values.description) {
    errors.description = 'Enter description';
  }
  if (!values.count) {
    errors.count = 'Enter Number of Attendees';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(connect(null, { createEvent })(EventForm));
