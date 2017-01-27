import {Container} from 'flux/utils';
import React from 'react';
import TaskStore from '../stores/tasks/TaskStore';
import TaskList from '../components/TaskList';

class TaskListContainer extends React.Component {
  static getStores() {
    return [TaskStore];
  }

  static calculateState(prevState) {
    return {
      tasks: TaskStore.getState()
    }
  }

  render() {
    return <TaskList tasks={this.state.tasks} />;
  }
}

export default Container.create(TaskListContainer);
