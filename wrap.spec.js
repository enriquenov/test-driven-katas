const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('is a function', () => {
    expect(typeof wrap).to.equal("function");
  });

  let line, maxLen;

  it('Returns a string', () => {
    line = "blah blah blah";
    maxLen = 6;
    expect(typeof wrap(line, maxLen)).to.equal("string");
  });

  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

});
