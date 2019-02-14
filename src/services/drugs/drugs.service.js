// Initializes the `drugs` service on path `/drugs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/drugs.model');
const hooks = require('./drugs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/drugs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('drugs');

  service.hooks(hooks);
};
