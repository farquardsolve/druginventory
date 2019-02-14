const assert = require('assert');
const app = require('../../src/app');

describe('\'add-permission-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('add-permission-users');

    assert.ok(service, 'Registered the service');
  });
});
