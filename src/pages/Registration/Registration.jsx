import { Link } from 'react-router-dom';

import RegistrationForm from '../../components/Form/RegistrationForm';

const RegistrationPage = () => {
  return (
    <main>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Event registration</h1>
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
