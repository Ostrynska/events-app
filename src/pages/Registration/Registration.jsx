import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';

const RegistrationPage = () => {
  return (
    <main>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Event registration</h1>
      <Form />
    </main>
  );
};

export default RegistrationPage;
