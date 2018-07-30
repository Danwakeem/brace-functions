const should = require('should');
const main = require('../../GetLanguages/index');

describe('GetLanguages/code test suite', () => {
  it('Canary test', () => {
    true.should.equal(true);
  });

  it('main test', () => {
    main.main().message.should.equal('Hello World!');
  });
});