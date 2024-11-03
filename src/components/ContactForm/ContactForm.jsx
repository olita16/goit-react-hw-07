import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ProfileValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, "Name can't exceed 50 characters"),
  tel: Yup.string()
    .required('Number is required')
    .min(3, 'Number must be at least 3 characters')
    .max(50, "Number can't exceed 50 characters"),
});

const ContactForm = () => {
  const initialValues = { username: '', tel: '' };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {name: values.username, number: values.tel };
    dispatch(addContact(newContact));
    options.resetForm();
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ProfileValidationSchema}
      >
        <Form className={css.contactForm}>
          <label className={css.formLabel}>
            <span>Name</span>
            <Field type="text" name="username" />
          </label>
          <ErrorMessage name="username" component="div" className={css.error} />
          <label className={css.formLabel}>
            <span>Number</span>
            <Field type="tel" name="tel" />
          </label>
          <ErrorMessage name="tel" component="div" className={css.error} />
          <button type="submit" className={css.btnAdd} >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;