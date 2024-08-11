import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "To short name")
      .max(50, "To long name")
      .required("Is required"),
    number: Yup.string()
      .min(3, "To short name")
      .max(50, "To long name")
      .required("Is required"),
  });

  const handleSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form>
          <label>
            <Field
              name="name"
              type="text"
              placeholder=" Enter contact name..."
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            <Field name="number" type="tel" placeholder=" xxx-xx-xx " />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
