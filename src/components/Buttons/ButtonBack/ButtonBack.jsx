import { Link } from 'react-router-dom';

import { IoIosArrowRoundBack } from 'react-icons/io';

import styles from './ButtonBack.module.css';

const ButtonBack = () => {
  return (
    <div className={styles.btnback}>
      <Link to="/" className={styles.back}>
        <IoIosArrowRoundBack aria-label="Back icon" size={20} />
        <p>Back</p>
      </Link>
    </div>
  );
};

export default ButtonBack;
