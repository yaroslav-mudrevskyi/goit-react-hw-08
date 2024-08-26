import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>

        <label>
          Email
          <Field type="email" name="email" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
