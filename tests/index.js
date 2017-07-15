const { expect } = require('chai');
const config = require('..');

describe('Webpack Builder test', () => {
  it('should run test', () => {
    expect(config).is.an('object');
  });
});
