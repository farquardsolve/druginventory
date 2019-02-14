// Initializes the `permisions` service on path `/permisions`
const createService = require('feathers-mongoose');
const createModel = require('../../models/permisions.model');
const hooks = require('./permisions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/permisions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('permisions');

  service.hooks(hooks);
};
