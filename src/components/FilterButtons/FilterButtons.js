import React from 'react'
import {Button} from "react-bootstrap";
import InputGroup from "react-bootstrap/es/InputGroup";


class FilterButtons extends React.Component{
  render(){
    const placeholder = 'Type here to search';
    const searchStyle = {fontSize: '20px'};
    return (
        <InputGroup.Append>
          <Button variant='info'>All</Button>
          <Button variant='outline-secondary'>Active</Button>
          <Button variant='outline-secondary'>Done</Button>
        </InputGroup.Append>
    );
  }
}

export default FilterButtons;
