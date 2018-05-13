'use strict';

const mock = require('egg-mock');

describe('test/upyun.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/upyun-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, upyun')
      .expect(200);
  });
});
