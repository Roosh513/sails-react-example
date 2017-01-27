import ajax from 'basic-ajax'

function getAll (callback) {
  ajax.getJson('/task?sort=createdAt%20DESC&limit=15').then(function(response){
    callback(response);
  });
}

function add (description, callback) {
  ajax.postJson('/task', {description: description}).then(function(response){
    callback(response);
  });
}

function remove (id, callback) {
  ajax.delete('/task/' + id).then(function(response){
    callback(response);
  });
}

function complete (task, callback) {
  var updatedTask = task;
  updatedTask.isComplete = true;
  putTask(updatedTask, callback);
}

function uncomplete (task, callback) {
  var updatedTask = task;
  updatedTask.isComplete = false;
  putTask(updatedTask, callback);
}

function putTask (task, callback) {
  ajax.putJson('/task/' + task.id, task).then(function(response){
    callback(response);
  });
}

export {
  getAll,
  add,
  complete,
  uncomplete,
  remove
}
