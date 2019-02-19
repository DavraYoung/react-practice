import React from 'react'
import {FormControl} from "react-bootstrap";


const SearchPanel = ({onSearchStrChanged}) => {
  return (
      <FormControl
          onChange={(e) => onSearchStrChanged(e.target.value)}
          placeholder="Search"
          aria-label="Search for words"
          aria-describedby="basic-addon2"
      />
  );
};

export default SearchPanel;
