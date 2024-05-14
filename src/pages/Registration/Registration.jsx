import RegistrationForm from '../../components/Form/RegistrationForm';

import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Title from '../../components/Title/Title';

const RegistrationPage = () => {
  return (
    <main>
      <Title text="Event registration" />
      <ButtonBack />
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
