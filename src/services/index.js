const users = require('./users/users.service.js');
const permisions = require('./permisions/permisions.service.js');
const registerUsers = require('./register-users/register-users.service.js');
const addPermissionUsers = require('./add-permission-users/add-permission-users.service.js');
const drugs = require('./drugs/drugs.service.js');
const stockDrugs = require('./stock-drugs/stock-drugs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(permisions);
  app.configure(registerUsers);
  app.configure(addPermissionUsers);
  app.configure(drugs);
  app.configure(stockDrugs);
};
