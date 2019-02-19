import React from 'react'
import TodoListItem from '../TodoListItem'
import {ListGroup} from 'react-bootstrap'
import './TodoList.css'

class TodoList extends React.Component {

  render() {
    const {items, className, onDeleted, onMarkImportant, onDone, filterFn, searchStr} = this.props;
    console.log(searchStr);
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
              const {label} = item;
              return (
                  <ListGroup.Item key={label} style={{padding: '0.5rem 1rem'}}>
                    <TodoListItem
                        {...item}
                        onDeleted={() => onDeleted(label)}
                        onMarkImportant={() => onMarkImportant(label)}
                        onDone={() => onDone(label)}
                    />
                  </ListGroup.Item>
              )
            });

    return <ListGroup {...{className}}>{elements}</ListGroup>;
  }
}


export default TodoList;
