import styles from './Participant.module.css';

const Participant = ({ participant }) => {
  return (
    <li className={styles.item}>
      <p className={styles.title}>{participant.name}</p>
      <p className={styles.description}>{participant.email}</p>
    </li>
  );
};

export default Participant;
