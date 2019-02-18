import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import './TodoListItem.css'
import 'font-awesome/css/font-awesome.min.css'


class TodoListItem extends Component {

  state = {
    done: false,
  };

  onClick = () => {
    console.log("CLICKED", this.state)
    this.setState((state) => {
      return {done: !state.done};
    });
  };


  render() {
    let {label, onDeleted, important = false} = this.props;
    let className = 'mr-auto my-auto';
    if (this.state.done)
      className = className + ' done'
    return (
        <div className="d-flex">
          <div className={className} onClick={this.onClick}>{label}</div>
          <Button variant='outline-danger' onClick={onDeleted} className='mx-1'>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
          <Button variant='outline-success'>
            <i className="fa fa-exclamation" aria-hidden="true"></i>
          </Button>
        </div>
    );
  }

}


export default TodoListItem;
