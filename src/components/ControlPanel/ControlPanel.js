import React from 'react'
import {InputGroup, Button,} from "react-bootstrap";
import SearchPanel from "../SearchPanel";
import FilterButtons from "../FilterButtons";


const ControlPanel = ({className}) => {
  return (
      <InputGroup {...{className}}>
        <SearchPanel/>
        <FilterButtons/>
      </InputGroup>

  )
};
export default ControlPanel;
