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

  }

  async update(id, data, params) {   

  }

  async patch(id, data, params) {
    const userService = this.app.service('users');
    const getUser = await userService.get(id, {
      query: {
        permision: {
          $not: {
            $in: data.permisions
          }
        },
        $select: ['permisions']
      }
    });
    console.log(getUser);
    if (getUser.permisions !== undefined) {
      getUser.permisions.push(...data.permisions);
      console.log(getUser);
      const patchUser = await userService.patch(id, {
        permisions: getUser.permisions
      }, {
        query: {
          $select: ['permisions']
        }
      });
      return patchUser
    } else {
      return {
        error:"Permision exist"
      };
    }
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
