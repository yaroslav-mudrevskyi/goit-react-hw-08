import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    console.log(values);
    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h2 className={s.title}>Register</h2>
          <label className={s.label}>
            Name
            <Field
              type="text"
              name="name"
              className={s.input}
              placeholder=" Enter your name..."
              autoComplete="off"
            />
          </label>

          <label className={s.label}>
            Email
            <Field
              type="email"
              name="email"
              className={s.input}
              placeholder=" Enter your email..."
              autoComplete="off"
            />
          </label>

          <label className={s.label}>
            Password
            <Field
              type="password"
              name="password"
              className={s.input}
              placeholder=" Enter your password..."
              autoComplete="off"
            />
          </label>

          <button type="submit" className={s.btn}>
            Register
          </button>
          <p className={s.subtitle}>
            Do you have an account?
            <Link to="/login" className={s.link}>
              Log In
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
