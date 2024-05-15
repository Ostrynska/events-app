import PropTypes from 'prop-types';

import EventListItem from '../Event/Event';

import styles from './EventsList.module.css';

const EventsList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map(event => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
