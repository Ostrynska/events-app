import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventsList from '../../components/EventsList/EventsList';
import Title from '../../components/Title/Title';
import SortBar from '../../components/SortBar/SortBar';

import { sortEvents } from '../../redux/events/slice';
import {
  getSortCriteria,
  getSortDirection,
} from '../../redux/events/selectors';

const EventsPage = () => {
  // eslint-disable-next-line
  const sortCriteria = useSelector(getSortCriteria);
  console.log(sortCriteria);
  const sortDirection = useSelector(getSortDirection);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sortCriteria && sortDirection) {
      dispatch(sortEvents(sortCriteria, sortDirection)); // Викликаємо сортування при зміні параметрів сортування
    }
  }, [sortCriteria, sortDirection, dispatch]);

  const handleSort = (criteria, direction) => {
    dispatch(sortEvents(criteria, direction));
  };
  return (
    <main>
      <Title text="Events" />
      <SortBar onSort={handleSort} />
      <EventsList />
    </main>
  );
};

export default EventsPage;
