import { Link } from 'react-router-dom';

import styles from './Event.module.css';

const Event = ({ event }) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.description}>{event.description}</p>
      <div className={styles.wrapper}>
        <Link to={`${event._id}/registration`}>Register</Link>
        <Link to={`/${event._id}/participants`}>View</Link>
      </div>
    </li>
  );
};

export default Event;
