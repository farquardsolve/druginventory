const assert = require('assert');
const app = require('../../src/app');

describe('\'stock-drugs\' service', () => {
  it('registered the service', () => {
    const service = app.service('stock-drugs');

    assert.ok(service, 'Registered the service');
  });
});
