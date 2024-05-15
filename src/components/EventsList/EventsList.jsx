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

export default EventsList;
