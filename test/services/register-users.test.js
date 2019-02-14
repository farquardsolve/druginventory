const assert = require('assert');
const app = require('../../src/app');

describe('\'register-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('register-users');

    assert.ok(service, 'Registered the service');
  });
});
