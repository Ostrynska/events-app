import Participant from '../Participant/Participant';

import styles from './ParticipantsList.module.css';

const ParticipantsList = ({ participants }) => {
  return (
    <section>
      <ul className={styles.list}>
        {participants.map(participant => (
          <Participant key={participant._id} participant={participant} />
        ))}
      </ul>
    </section>
  );
};

export default ParticipantsList;
