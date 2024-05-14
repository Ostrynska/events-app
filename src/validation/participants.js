import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .test(
      'full-name',
      'Please enter at least 2 letters your name and don`t forget a last name',
      value => {
        if (!value) return false;
        const nameParts = value.split(' ');
        return (
          nameParts.length >= 2 && nameParts.every(part => part.length >= 2)
        );
      },
    ),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  birthdate: Yup.date()
    .max(new Date(), 'Date of Birth cannot be in the future')
    .required('Date of Birth is required'),
  referrer: Yup.string().required('Referrer is required'),
});

export default validationSchema;
