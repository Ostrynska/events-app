import { Link } from 'react-router-dom';

import styles from './ButtonMain.module.css';

const ButtonMain = ({ text, to }) => {
  return (
    <Link className={styles.btnmain} to={to}>
      {text}
    </Link>
  );
};

export default ButtonMain;
