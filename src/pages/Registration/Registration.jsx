import RegistrationForm from '../../components/Form/RegistrationForm';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Title from '../../components/Title/Title';

const RegistrationPage = () => {
  return (
    <main>
      <Title text="Event registration" />
      <section>
        <h2 hidden>Events Registration Form</h2>
        <ButtonBack />
        <RegistrationForm />
      </section>
    </main>
  );
};

export default RegistrationPage;
