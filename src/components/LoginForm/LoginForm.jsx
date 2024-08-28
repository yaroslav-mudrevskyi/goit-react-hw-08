import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h2 className={s.title}>Login</h2>
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
            Login
          </button>
          <p className={s.subtitle}>
            Don't have an account?
            <Link to="/register" className={s.link}>
              Sign Up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
