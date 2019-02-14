// Initializes the `register-users` service on path `/register-users`
const createService = require('./register-users.class.js');
const hooks = require('./register-users.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/register-users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('register-users');

  service.hooks(hooks);
};
