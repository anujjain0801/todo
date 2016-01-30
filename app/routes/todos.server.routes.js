// Required in /app/config/express.js

var users = require('../../app/controllers/users.server.controller'),
    todos = require('../../app/controllers/todos.server.controller');

module.exports = function(app) {
  app.route('/api/todos')
    .get(todos.list)
    .post(users.requiresLogin, todos.create);

  app.route('/api/todos/:todoId')
    .get(todos.read);

  // Every route that has todoId param will call middleware
  app.param('todoId', todos.todoById);
};