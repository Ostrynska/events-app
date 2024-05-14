import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { addParticipant } from '../../services/events-api';

import styles from './RegistrationForm.module.css';
import ButtonSubmit from '../Buttons/ButtonSubmit/ButtonSubmit';

const initialValues = {
  name: '',
  email: '',
  birthdate: '',
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
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <div className={styles.inputwrapp}>
              <label htmlFor="name">Full Name</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div className={styles.inputwrapp}>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
            </div>
            <div className={styles.inputwrapp}>
              <label htmlFor="birthdate">Date of Birth</label>
              <Field type="date" id="birthdate" name="birthdate" />
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
            </div>

            <ButtonSubmit />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RegistrationForm;
