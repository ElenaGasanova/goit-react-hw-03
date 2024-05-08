import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const dataSchema = Yup.object({
  name: Yup.string()
    .min(3, "must be at least 3 characters long")
    .max(50, "no more than 50 characters")
    .required(),
  number: Yup.string()
    .min(3, "must be at least 3 characters long")
    .max(50, "no more than 50 characters")
    .required(),
});

export const ContactForm = ({ onAdd }) => {
  const initialData = {
    id: "",
    name: "",
    number: "",
  };

  const handleSubmit = (value, actions) => {
    value.id = nanoid();

    onAdd(value);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialData}
      className={s.fornWrapper}
      onSubmit={handleSubmit}
      validationSchema={dataSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="nameID">
          <span>Name</span>
          <Field
            className={s.input}
            id="nameID"
            placeholder="Enter your name..."
            name="name"
          />
          <ErrorMessage className={s.message} name="name" component="span" />
        </label>
        <label className={s.label} htmlFor="numberID">
          <span>Number</span>
          <Field
            className={s.input}
            id="numberID"
            placeholder="Enter your number..."
            name="number"
          />
          <ErrorMessage className={s.message} name="number" component="span" />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
