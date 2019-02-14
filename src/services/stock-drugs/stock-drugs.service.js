// Initializes the `stock-drugs` service on path `/stock-drugs`
const createService = require('./stock-drugs.class.js');
const hooks = require('./stock-drugs.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stock-drugs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('stock-drugs');

  service.hooks(hooks);
};
