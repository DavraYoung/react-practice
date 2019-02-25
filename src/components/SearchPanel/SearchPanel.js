import React from 'react'
import {FormControl} from "react-bootstrap";
import {filterTextChanged} from '../../actions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
  return {
    filterText: state.filterText
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({filterTextChanged}, dispatch);
};

const SearchPanel = ({filterTextChanged, filterText}) => {
  console.log(filterText);
  return (
      <FormControl
          onChange={(e) => filterTextChanged(e.target.value)}
          placeholder="Search"
          aria-label="Search for words"
          aria-describedby="basic-addon2"
      />
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
