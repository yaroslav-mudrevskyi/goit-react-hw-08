import { useDispatch } from "react-redux";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = useId();
  const numberId = useId();

  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "To short name")
      .max(50, "To long name")
      .required("Is required"),
    number: Yup.string()
      .min(3, "To short number")
      .max(50, "To long number")
      .required("Is required"),
  });

  const handleSubmit = (values, options) => {
    const newContact = { ...values };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={s.wrapper}>
          <label htmlFor={nameId} className={s.label}>
            Name
            <Field
              className={s.input}
              id={nameId}
              name="name"
              type="text"
              placeholder=" Enter new contact name..."
              autoComplete="off"
            />
            <ErrorMessage name="name" component="span" />
          </label>
          <label htmlFor={numberId} className={s.label}>
            Number
            <Field
              className={s.input}
              name="number"
              type="tel"
              placeholder=" xxx-xxx-xxxx "
              id={numberId}
              autoComplete="off"
            />
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
