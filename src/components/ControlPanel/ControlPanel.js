import React from 'react'
import {InputGroup, Button,} from "react-bootstrap";
import SearchPanel from "../SearchPanel";
import FilterButtons from "../FilterButtons";


const ControlPanel = ({className,onSearchStrChanged}) => {
  return (
      <InputGroup {...{className}}>
        <SearchPanel {...{onSearchStrChanged}}/>
        <FilterButtons/>
      </InputGroup>

  )
};
export default ControlPanel;
