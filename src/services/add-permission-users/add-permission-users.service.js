// Initializes the `add-permission-users` service on path `/add-permission-users`
const createService = require('./add-permission-users.class.js');
const hooks = require('./add-permission-users.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/add-permission-users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('add-permission-users');

  service.hooks(hooks);
};
