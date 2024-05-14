import React, { useState } from 'react';
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
      <CiSearch className={styles.icon} size={24} color="#551a8b" />
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

export default SearchBar;
