/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }
  setup(app) {
    this.app = app;
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    const userService = this.app.service('users');
    const authService = this.app.service('authentication');

    let _data = {
      "email": data.email,
      "password": data.password,
      "firstName": data.firstName,
      "lastName": data.lastName
    };
    const user = await userService.create(_data);


    const auth = await authService.create({
      email: data.email,
      password: data.password,
      strategy: "local"
    });

    user.auth = auth;
    return user;

  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {
      id
    };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
