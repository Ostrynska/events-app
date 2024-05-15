import styles from './ButtonSort.module.css';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

const ButtonSort = ({ text, direction, onClick }) => {
  const getIcon = () => {
    return direction === 'asc' ? (
      <MdArrowUpward className={styles.icon} />
    ) : (
      <MdArrowDownward className={styles.icon} />
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

export default ButtonSort;
