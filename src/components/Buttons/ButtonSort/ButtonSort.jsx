import PropTypes from 'prop-types';

import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

import styles from './ButtonSort.module.css';

const ButtonSort = ({ text, direction, onClick }) => {
  const getIcon = () => {
    return direction === 'asc' ? (
      <MdArrowUpward className={styles.icon} aria-label="Sort direction up" />
    ) : (
      <MdArrowDownward
        className={styles.icon}
        aria-label="Sort direction down"
      />
    );
  };

  const renderButtonText = () => {
    return (
      <div className={styles.wrapper}>
        {text} {getIcon(direction)}
      </div>
    );
  };

  return (
    <button type="button" className={styles.btnsort} onClick={onClick}>
      {renderButtonText()}
    </button>
  );
};

ButtonSort.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['asc', 'desc']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSort;
