import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import './TodoListItem.css'
import 'font-awesome/css/font-awesome.min.css'


class TodoListItem extends Component {


  render() {
    let {label, important = false, done = false, onDeleted, onMarkImportant, onDone} = this.props;
    let className = 'mr-auto my-auto';
    if (done)
      className = className + ' done'
    let style = {
      fontWeight: (important ? 600 : 300),
      color: (important ? 'blue' : 'black')
    };
    //console.log(style);
    return (
        <div className="d-flex">
          <div className={className} onClick={onDone} style={style}>
            {label}
          </div>
          <Button variant='outline-danger' onClick={onDeleted} className='mx-1'>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
          <Button variant='outline-success' onClick={onMarkImportant}>
            <i className="fa fa-exclamation" aria-hidden="true"></i>
          </Button>
        </div>
    );
  }

}


export default TodoListItem;
