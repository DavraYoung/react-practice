import React from 'react'
import {FormControl} from "react-bootstrap";


const SearchPanel = () => {
  const placeholder = 'Type here to search';
  const searchStyle = {fontSize: '20px'};
  return (
      <FormControl
          placeholder="Search"
          aria-label="Search for words"
          aria-describedby="basic-addon2"
      />
  );
};

export default SearchPanel;
