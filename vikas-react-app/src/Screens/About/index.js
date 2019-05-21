import React, { PureComponent } from "react";
import { Formik, Field } from "formik";

const formJson = [
  {
    name: "title",
    title: "Title"
  },
  {
    name: "courseURL",
    title: "Course URL"
  },
  {
    name: "length",
    title: "Length"
  },
  {
    name: "category",
    title: "Category"
  }
];

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label htmlFor={field.name}>{props.label}</label>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

export default class index extends PureComponent {
  // state = {
  //   title: "",
  //   courseURL: "",
  //   length: "",
  //   category: ""
  // };

  // changeText = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  submit = async (values, actions) => {
    console.log(actions);
    // actions.setErrors({ title: "Title is already exist" });
    try {
      const res = await fetch("http://localhost:3004/courses", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const course = await res.json();
      console.log(course);
      const { history } = this.props;
      history.push("/", { course });
    } catch (error) {
      actions.setErrors({ general: error.message });
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h1>Add Courses</h1>
        <Formik
          initialValues={{
            title: "",
            courseURL: "",
            length: "",
            category: "",
            country: "",
            state: ""
          }}
          validate={values => {
            let errors = {};
            if (!values.title) {
              errors.title = "Required";
            }
            return errors;
          }}
          onSubmit={this.submit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <span>{!!errors.general && errors.general}</span>
                {formJson.map(item => (
                  <Field
                    key={item.name}
                    name={item.name}
                    label={item.title}
                    component={CustomInputComponent}
                  />
                ))}

                <input
                  type="submit"
                  value="Add Course"
                  disabled={isSubmitting}
                />
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
