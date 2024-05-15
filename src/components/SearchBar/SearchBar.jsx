import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CiSearch } from 'react-icons/ci';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.wrapper}>
      <CiSearch
        className={styles.icon}
        size={22}
        color="#551a8b"
        aria-label="Search icon"
      />
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search participants by name or email"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
