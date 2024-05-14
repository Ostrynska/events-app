import styles from './ButtonSort.module.css';

const ButtonSort = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.btnsort} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonSort;
