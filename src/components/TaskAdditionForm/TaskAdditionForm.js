import React from 'react'
import {Button, FormControl, InputGroup} from "react-bootstrap";


class TaskAdditionForm extends React.Component {

  state = {
    label: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      label: ''
    });
    this.props.onTaskAdded(this.state.label)
  };


  render() {
    return (
        <form className='mt-4' onSubmit={this.onSubmit}>
          <InputGroup className="mb-3">
            <FormControl
                placeholder="Task title"
                aria-label="Task title"
                aria-describedby="basic-addon2"
                value={this.state.label}
                onChange={(e) => {
                  this.setState({
                    label: e.target.value
                  })
                }}
            />
            <InputGroup.Append>
              <Button type='submit' variant="primary">Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </form>

    );
  }


}


export default TaskAdditionForm;
