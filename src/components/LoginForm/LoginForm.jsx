import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const loginSchema = Yup.object({
    email: Yup.string()
      .min(3, "To short email")
      .max(50, "To long email")
      .required("Is required"),
    password: Yup.string()
      .min(8, "To short password")
      .max(50, "To long password")
      .required("Is required"),
  });

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Login</h2>
          <label className={s.label}>
            Email
            <Field
              type="email"
              name="email"
              className={s.input}
              placeholder=" Enter your email..."
            />
            <ErrorMessage name="email" component="span" />
          </label>

          <label className={s.label}>
            Password
            <Field
              type="password"
              name="password"
              className={s.input}
              placeholder=" Enter your password..."
            />
            <ErrorMessage name="password" component="span" />
          </label>

          <button type="submit" className={s.btn}>
            Login
          </button>
          <p className={s.subtitle}>
            Don't have an account?
            <Link to="/register" className={s.link}>
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
