import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>Page Not Found</h1>
      <ButtonBack />
    </div>
  );
};

export default NotFound;
