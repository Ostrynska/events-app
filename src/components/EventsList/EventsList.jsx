import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents, getLoading, getError } from '../../redux/events/selectors';
import { fetchEvents } from '../../redux/events/operations';
import EventListItem from '../Event/Event';

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <section>
      <h2>Events</h2>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {events.map(event => (
            <EventListItem key={event._id} event={event} />
          ))}
        </ul>
      )}
      {/* {error && <p>{error}</p>} */}
    </section>
  );
};

export default EventsList;
