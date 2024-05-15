import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './ButtonMain.module.css';

const ButtonMain = ({ text, to }) => {
  return (
    <Link className={styles.btnmain} to={to}>
      {text}
    </Link>
  );
};

ButtonMain.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ButtonMain;
