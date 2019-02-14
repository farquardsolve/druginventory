const assert = require('assert');
const app = require('../../src/app');

describe('\'drugs\' service', () => {
  it('registered the service', () => {
    const service = app.service('drugs');

    assert.ok(service, 'Registered the service');
  });
});
