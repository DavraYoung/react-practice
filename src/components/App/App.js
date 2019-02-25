import React from 'react'
import {Container} from "react-bootstrap";
import AppHeader from "../AppHeader";
import ControlPanel from "../ControlPanel";
import TodoList from "../TodoList";
import TaskAdditionForm from "../TaskAdditionForm";

class App extends React.Component {

  state = {
    filterFn: () => true,
    searchStr: '',
    items:
        [
          {
            id: 'davron',
            label: 'Learn React',
            important: false,
            done: false
          },
          {
            id: 'davron2',
            label: 'Build Awesome App',
            important: false,
            done: false
          }
        ]
  };


  onDeleted = (label) => {
    this.setState((state) => {
          return {
            items: state.items.filter(
                (el) => el.label !== label
            )
          };
        }
    )
  };


  onMarkImportant = (label) => {
    this.setState((state) => {
          let items = state.items.map((item) => {
            let obj = {};
            if (item.label === label) {
              obj.important = !item.important;
            }
            return {...item, ...obj}
          });
          return {items}
        }
    )
  };


  onDone = (label) => {
    console.log("DONE", label)
    this.setState((state) => {
          let items = state.items.map((item) => {
            let obj = {};
            if (item.label === label) {
              obj.done = !item.done;
            }
            return {...item, ...obj}
          });
          return {items}
        }
    )
  };

  onTaskAdded = (label) => {
    this.setState((state) => {
      let {items} = state;
      return {
        items: [...items.filter((item) => item.label !== label),
          {
            label: label,
            important: false,
            done: false
          }]
      }
    })
  };


  render() {
    return (
        <Container className onClick={() => this.setState(() => {
          return {
            toggler: this.state.toggler || true
          }
        })}>
          <AppHeader className='my-3'/>
          <ControlPanel />
          <TodoList items={this.state.items}
                    searchStr={this.state.searchStr}
                    className='mt-4'
                    onDeleted={this.onDeleted}
                    onDone={this.onDone}
                    filterFn={this.state.filterFn}
                    onMarkImportant={this.onMarkImportant}/>
          <TaskAdditionForm onTaskAdded={this.onTaskAdded}/>
        </Container>
    );
  }
}

export default App;
