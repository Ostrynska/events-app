import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  email: '',
  birthdate: '',
  referrer: '',
};

const onSubmit = values => {
  console.log(values);
};

const RegistrationForm = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="name">Full Name:</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="birthdate">Date of Birth:</label>
              <Field type="date" id="birthdate" name="birthdate" />
            </div>
            <div>
              <label>Where did you hear about this event?</label>
              <div>
                <label>
                  <Field
                    type="checkbox"
                    name="referrerSocialMedia"
                    value="socialMedia"
                  />
                  Social Media
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="referrerFriends"
                    value="friends"
                  />
                  Friends
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="referrerFoundMyself"
                    value="foundMyself"
                  />
                  Found Myself
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
