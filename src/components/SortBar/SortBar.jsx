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

  const getIcon = direction => {
    return direction === 'asc' ? <MdArrowUpward /> : <MdArrowDownward />;
  };

  const renderButtonText = (text, direction) => {
    return (
      <>
        {text} {getIcon(direction)}
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <ButtonSort
        text={renderButtonText('Sort by Title', sortDirections.title)}
        onClick={() => handleSort('title')}
      />
      <ButtonSort
        text={renderButtonText('Sort by Date', sortDirections.date)}
        onClick={() => handleSort('date')}
      />
      <ButtonSort
        text={renderButtonText('Sort by Organizer', sortDirections.organizer)}
        onClick={() => handleSort('organizer')}
      />
    </div>
  );
};

export default SortBar;
