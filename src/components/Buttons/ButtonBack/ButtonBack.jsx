import { Link } from 'react-router-dom';

import styles from './ButtonBack.module.css';

const ButtonBack = () => {
  return (
    <div className={styles.btnback}>
      <Link to="/" className={styles.back}>
        Back
      </Link>
    </div>
  );
};

export default ButtonBack;
