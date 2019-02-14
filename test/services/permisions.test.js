const assert = require('assert');
const app = require('../../src/app');

describe('\'permisions\' service', () => {
  it('registered the service', () => {
    const service = app.service('permisions');

    assert.ok(service, 'Registered the service');
  });
});
