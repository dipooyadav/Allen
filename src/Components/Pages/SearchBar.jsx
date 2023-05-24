import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onChange }) => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onChange(searchText);
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        id='fullWidth'
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
