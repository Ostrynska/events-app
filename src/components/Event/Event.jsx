import PropTypes from 'prop-types';

import ButtonMain from '../Buttons/ButtonMain/ButtonMain';

import styles from './Event.module.css';

const Event = ({ event }) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{event.title}</h3>
      <div className={styles.wrapper}>
        <p>{event.date}</p>
        <p>{event.organizer}</p>
      </div>
      <p className={styles.description}>{event.description}</p>
      <div className={styles.wrapper}>
        <ButtonMain to={`${event._id}/registration`} text={'Register'} />
        <ButtonMain to={`${event._id}/participants`} text={'View'} />
      </div>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
