import React from 'react';
import TaskActions from '../stores/tasks/TaskActions';
import * as API from '../api/api'

class CreateTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: ""
    }
  }

  onClick(event) {
    if(this.state.description.length > 0){
      API.tasks.add(this.state.description, (response) => {
        this.setState({description: ""})
        TaskActions.addTask(response.json);
      })
    }
  }

  onChange(event) {
    this.setState({description: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text" name="description" placeholder="Enter description" value={this.state.description}
                onChange={(e) => this.onChange(e)} />
              <button className="btn waves-effect waves-light" onClick={(e) => this.onClick(e)}>Create Task</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class DeleteTask extends React.Component {

  onClick(event) {
    API.tasks.remove(this.props.task.id, function(response) {
      TaskActions.removeTask(response.json);
    })
  }

  render() {
    return (
      <span
        className="badge red new"
        data-badge-caption="" onClick={(e) => this.onClick(e)}>
        Delete Task
      </span>
    )
  }

}

class Task extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isComplete: props.task.isComplete
    }
  }

  onClick(event) {
    if (this.state.isComplete) {
      API.tasks.uncomplete(this.props.task, (response) => {
        TaskActions.updateTask(response.json);
        this.setState({isComplete: !this.state.isComplete})
      })
    } else {
      API.tasks.complete(this.props.task, (response) => {
        TaskActions.updateTask(response.json);
        this.setState({isComplete: !this.state.isComplete})
      })
    }
  }

  render() {
    return (
      <div>
        <span
          onClick={(e) => this.onClick(e)}
          className={this.state.isComplete ? "strikethrough" : ""}>
          {this.props.task.description}
        </span>
        <DeleteTask task={this.props.task} />
      </div>
    );
  }
}

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    API.tasks.getAll((response) => {
      TaskActions.setTasks(response.json)
    })
  }

  render () {
    var tasks = this.props.tasks.map( (task, index) => {
      return (<a href="#!"className="collection-item" key={index}><Task task={task} /></a>);
    });

    return (
      <div className="row">
          <CreateTask />
          <div className="col s6">
            {tasks.length > 0 ? (<div className="collection">{tasks}</div>) : null}
          </div>
      </div>
    )
  }
}

export default TaskList;
