'use strict'

import {ReduceStore} from 'flux/utils';
import TaskDispatcher from './TaskDispatcher';
import TaskActionTypes from './TaskActionTypes';

class TaskStore extends ReduceStore {
  constructor() {
    super(TaskDispatcher);
  }

  getInitialState() {
    return []
  }

  reduce(state, action) {
    switch (action.type) {
      case TaskActionTypes.ADD_TASK:
        var newState = [action.task].concat(state)
        return newState;
      case TaskActionTypes.UPDATE_TASK:
        var ids = state.map(function(task) { return action.task.id });
        var index = ids.indexOf(action.task.id);
        if (index >= 0) {
          state[index] = action.task;
        }
        this.__emitChange();
        return state;
      case TaskActionTypes.DELETE_TASK:
        var newState = state.filter(function (task) {
          return task.id != action.task.id;
        })
        return newState;
      case TaskActionTypes.SET_TASKS:
        return action.tasks;
      default:
        return state;
    }
  }
}

export default new TaskStore();
