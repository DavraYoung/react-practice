import React from 'react'
import TodoListItem from '../TodoListItem'
import {ListGroup} from 'react-bootstrap'
import './TodoList.css'

class TodoList extends React.Component {

  render() {
    const {items, className, onDeleted} = this.props;
    const elements = items.map(
        item => {
          const {id, ...coercedItem} = item;
          return (
              <ListGroup.Item key={id} style={{padding: '0.5rem 1rem'}}>
                <TodoListItem {...coercedItem} onDeleted={() => onDeleted(id)}/>
              </ListGroup.Item>
          )
        });

    return <ListGroup {...{className}}>{elements}</ListGroup>;
  }
}


export default TodoList;
