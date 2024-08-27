import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
