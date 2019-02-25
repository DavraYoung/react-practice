import React from 'react'
import TodoListItem from '../TodoListItem'
import {ListGroup} from 'react-bootstrap'
import './TodoList.css'

class TodoList extends React.Component {

  render() {
    const {items,
      className,
      onDeleted,
      onMarkImportant,
      onDone,
      filterFn} = this.props;


    const elements = items
        .filter(filterFn)
        .filter(item => item.label
            .toLowerCase()
            .replace(' ', '')
            .includes(searchStr
                .toLowerCase()
                .replace(' ', '')))
        .map(
            item => {
              return (
                  <ListGroup.Item key={item.label} style={{padding: '0.5rem 1rem'}}>
                    <TodoListItem
                        {...item}
                        onDeleted={() => onDeleted(label)}
                        onMarkImportant={() => onMarkImportant(label)}
                        onDone={() => onDone(label)}
                    />
                  </ListGroup.Item>
              )
            });

    return <ListGroup className={className}>{elements}</ListGroup>;
  }
}


export default TodoList;
