import ButtonMain from '../Buttons/ButtonMain/ButtonMain';

import styles from './Event.module.css';

const Event = ({ event }) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.description}>{event.description}</p>
      <div className={styles.wrapper}>
        <ButtonMain to={`${event._id}/registration`} text={'Register'} />
        <ButtonMain to={`${event._id}/participants`} text={'View'} />
      </div>
    </li>
  );
};

export default Event;
