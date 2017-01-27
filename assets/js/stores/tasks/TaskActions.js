'use strict';

import TaskActionTypes from './TaskActionTypes'
import TaskDispatcher from './TaskDispatcher'

const Actions = {
  addTask(task) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.ADD_TASK,
      task: task
    })
  },

  updateTask(task) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.UPDATE_TASK,
      task: task
    })
  },

  removeTask(task) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.DELETE_TASK,
      task: task
    })
  },

  setTasks(tasks) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.SET_TASKS,
      tasks: tasks
    })
  }
};

export default Actions;
