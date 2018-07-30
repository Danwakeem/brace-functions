const should = require('should');
const main = require('../../GetOutputV2/index');

describe('GetOutputV2/code test suite', () => {
  it('Canary test', () => {
    true.should.equal(true);
  });

  it('main test', () => {
    main.main().message.should.equal('Hello World!');
  });
});