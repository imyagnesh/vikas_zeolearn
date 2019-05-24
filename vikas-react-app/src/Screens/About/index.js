import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import InputComponent from './InputComponent';
import SelectComponent from './selectComponent';

const formJson = [
  {
    name: 'title',
    title: 'Title',
    placeholder: 'Title',
  },
  {
    name: 'watchHref',
    title: 'Course URL',
    placeholder: 'Course URL',
  },
  {
    name: 'authorId',
    title: 'Author',
    placeholder: 'Select Author',
    type: 'select',
  },
  {
    name: 'length',
    placeholder: 'Length',
    title: 'Length',
  },
  {
    name: 'category',
    placeholder: 'Category',
    title: 'Category',
  },
];

export default class index extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  submit = async (values, actions) => {
    console.log(actions);
    // actions.setErrors({ title: "Title is already exist" });
    try {
      let res = null;
      if (values.id) {
        res = await fetch(`http://localhost:3004/courses/${values.id}`, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      } else {
        res = await fetch('http://localhost:3004/courses', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      }
      const course = await res.json();
      const { history } = this.props;
      history.push('/', { course });
    } catch (error) {
      actions.setErrors({ general: error.message });
    }
  };

  render() {
    const {
      history,
      location: { state },
    } = this.props;
    return (
      <div>
        <button type="button" onClick={() => history.goBack()}>
          Back
        </button>
        <h1>{`${state.course.id ? 'Edit' : 'Add'} Course`}</h1>
        <Formik
          initialValues={state.course}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            return errors;
          }}
          onSubmit={this.submit}
        >
          {({ isSubmitting, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
              <span>{!!errors.general && errors.general}</span>
              {formJson.map(item => {
                let options = {};
                if (item.type === 'select') {
                  const authors = state.authors.map(x => ({
                    value: x.id,
                    text: `${x.firstName} ${x.lastName}`,
                  }));
                  options = {
                    options: authors,
                  };
                }
                return (
                  <Field
                    key={item.name}
                    name={item.name}
                    label={item.title}
                    placeholder={item.placeholder}
                    {...options}
                    component={item.type === 'select' ? SelectComponent : InputComponent}
                  />
                );
              })}
              <input
                type="submit"
                value={`${state.course.id ? 'Edit' : 'Add'} Course`}
                disabled={isSubmitting}
              />
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
