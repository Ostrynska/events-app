import EventListItem from '../Event/Event';

import styles from './EventsList.module.css';

const EventsList = ({ events, loading }) => {
  return (
    <section>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className={styles.list}>
          {events.map(event => (
            <EventListItem key={event.id} event={event} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default EventsList;
