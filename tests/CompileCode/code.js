const should = require('should');
const main = require('../../CompileCode/index');

describe('CompileCode/code test suite', () => {
  it('Canary test', () => {
    true.should.equal(true);
  });

  it('main test', () => {
    main.main().message.should.equal('Hello World!');
  });
});