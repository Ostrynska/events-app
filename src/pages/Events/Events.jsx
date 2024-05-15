import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents, getLoading } from '../../redux/events/selectors';
import { fetchEvents } from '../../redux/events/operations';
import EventsList from '../../components/EventsList/EventsList';
import Title from '../../components/Title/Title';
import SortBar from '../../components/SortBar/SortBar';

const EventsPage = () => {
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    if (events.length > 0) {
      const sorted = [...events].sort((a, b) => {
        const propA = a[sortBy] || ''; // Якщо властивість не існує, встановлюємо порожній рядок
        const propB = b[sortBy] || ''; // Якщо властивість не існує, встановлюємо порожній рядок
        if (sortDirection === 'asc') {
          return propA.localeCompare(propB);
        } else {
          return propB.localeCompare(propA);
        }
      });
      setSortedEvents(sorted);
    }
  }, [events, sortBy, sortDirection]);

  const handleSort = (criteria, direction) => {
    setSortBy(criteria);
    setSortDirection(direction);
  };

  return (
    <main>
      <Title text="Events" />
      <SortBar onSort={handleSort} />
      <EventsList events={sortedEvents} loading={loading} />
    </main>
  );
};

export default EventsPage;
