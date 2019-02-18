import React from 'react'
import {Container} from "react-bootstrap";
import AppHeader from "../AppHeader";
import ControlPanel from "../ControlPanel";
import TodoList from "../TodoList";

class App extends React.Component {
  state = {
    items:
        [
          {
            id: 'davron',
            label: 'Learn React',
            important: true
          },
          {
            id: 'davron2',
            label: 'Build Awesome App',
            important: false
          }
        ]
  };

  onDeleted = (id) => {
    console.log("DELETED", id)

    this.setState((state) => {
          return {
            items: state.items.filter(
                (el) => el.id !== id
            )
          };
        }
    )
  }

  render() {
    return (
        <Container className>
          <AppHeader className='my-3'/>
          <ControlPanel/>
          <TodoList items={this.state.items} className='mt-4' onDeleted={this.onDeleted}/>
        </Container>
    );
  }


}

export default App;
