import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents, getLoading } from '../../redux/events/selectors';
import { fetchEvents } from '../../redux/events/operations';

import EventsList from '../../components/EventsList/EventsList';
import Title from '../../components/Title/Title';
import SortBar from '../../components/SortBar/SortBar';
import ScrollToTop from '../../components/Buttons/ScrollToTop/ScrollToTop';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import Loader from '../../components/Loader/Loader';

const EventsPage = () => {
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  const loading = useSelector(getLoading);
  const [visibleEvents, setVisibleEvents] = useState(events.slice(0, 9));

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    if (visibleEvents.length > 0) {
      const sorted = [...visibleEvents].sort((a, b) => {
        const propA = a[sortBy] || '';
        const propB = b[sortBy] || '';
        if (sortDirection === 'asc') {
          return propA.localeCompare(propB);
        } else {
          return propB.localeCompare(propA);
        }
      });
      setSortedEvents(sorted);
    }
  }, [visibleEvents, sortBy, sortDirection]);

  const handleSort = (criteria, direction) => {
    setSortBy(criteria);
    setSortDirection(direction);
  };

  const loadMoreEvents = () => {
    const remainingEvents = events.slice(visibleEvents.length);
    const nextEvents = remainingEvents.slice(0, 6);
    const updatedVisibleEvents = [...visibleEvents, ...nextEvents];
    const sorted = [...updatedVisibleEvents].sort((a, b) => {
      const propA = a[sortBy] || '';
      const propB = b[sortBy] || '';
      if (sortDirection === 'asc') {
        return propA.localeCompare(propB);
      } else {
        return propB.localeCompare(propA);
      }
    });
    setVisibleEvents(sorted);
  };

  return (
    <>
      <main>
        <Title text="Events" />
        <section>
          <h2 hidden>Events List</h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              <SortBar onSort={handleSort} />
              <EventsList events={sortedEvents} />
            </>
          )}
        </section>
        <ScrollToTop />
      </main>
      <InfiniteScroll onScrollEnd={loadMoreEvents} />
    </>
  );
};

export default EventsPage;
