import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { addParticipant } from '../../services/events-api';

import validationSchema from '../../validation/participants';
import styles from './RegistrationForm.module.css';
import ButtonSubmit from '../Buttons/ButtonSubmit/ButtonSubmit';

const initialValues = {
  name: '',
  email: '',
  birthdate: new Date(),
  referrer: '',
};

const RegistrationForm = () => {
  // eslint-disable-next-line
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { id } = useParams();

  const onSubmit = async (values, { resetForm }) => {
    try {
      await addParticipant(id, values);
    } catch (error) {
      console.error('Error while adding participant:', error);
    }

    setIsFormSubmitted(true);
    resetForm();

    alert('Success');
  };
  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.inputwrapp}>
              <label htmlFor="name">Full Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={errors.name && touched.name ? styles.errorField : ''}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.inputwrapp}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={
                  errors.email && touched.email ? styles.errorField : ''
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.inputwrapp}>
              <label htmlFor="birthdate">Date of Birth</label>
              <Field
                type="date"
                id="birthdate"
                name="birthdate"
                className={
                  errors.birthdate && touched.birthdate
                    ? styles.errorField
                    : styles.datePicker
                }
              />
              <ErrorMessage
                name="birthdate"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.inputwrapp}>
              <label>Where did you hear about this event?</label>
              <div className={styles.checkboxwrapp}>
                <label className={styles.checkboxlabel}>
                  <Field
                    className={styles.checkbox}
                    type="radio"
                    name="referrer"
                    value="socialMedia"
                  />
                  Social Media
                </label>
                <label className={styles.checkboxlabel}>
                  <Field
                    className={styles.checkbox}
                    type="radio"
                    name="referrer"
                    value="friends"
                  />
                  Friends
                </label>
                <label className={styles.checkboxlabel}>
                  <Field
                    className={styles.checkbox}
                    type="radio"
                    name="referrer"
                    value="foundMyself"
                  />
                  Found Myself
                </label>
              </div>
              <ErrorMessage
                name="referrer"
                component="div"
                className={styles.error}
              />
            </div>

            <ButtonSubmit />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RegistrationForm;
