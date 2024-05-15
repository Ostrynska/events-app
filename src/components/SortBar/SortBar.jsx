import { useState } from 'react';
import ButtonSort from '../Buttons/ButtonSort/ButtonSort';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

import styles from './SortBar.module.css';

const SortBar = ({ onSort }) => {
  const [sortDirections, setSortDirections] = useState({
    title: 'asc',
    date: 'asc',
    organizer: 'asc',
  });

  const handleSort = criteria => {
    const newDirection = sortDirections[criteria] === 'asc' ? 'desc' : 'asc';
    setSortDirections(prevState => ({
      ...prevState,
      [criteria]: newDirection,
    }));
    onSort(criteria, newDirection);
  };

  return (
    <div className={styles.wrapper}>
      <ButtonSort
        text={'Sort by Title'}
        direction={sortDirections.title}
        onClick={() => handleSort('title')}
      />
      <ButtonSort
        text={'Sort by Date'}
        direction={sortDirections.date}
        onClick={() => handleSort('date')}
      />
      <ButtonSort
        text={'Sort by Organizer'}
        direction={sortDirections.organizer}
        onClick={() => handleSort('organizer')}
      />
    </div>
  );
};

export default SortBar;