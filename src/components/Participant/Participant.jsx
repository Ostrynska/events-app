import PropTypes from 'prop-types';

import styles from './Participant.module.css';

const Participant = ({ participant }) => {
  return (
    <li className={styles.item}>
      <p className={styles.title}>{participant.name}</p>
      <p className={styles.description}>{participant.email}</p>
    </li>
  );
};

Participant.propTypes = {
  participant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Participant;
