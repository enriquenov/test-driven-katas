const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe("twoSum", () => {
  it('is a function', () => {
    expect(typeof longestCommonPrefix).to.equal("function");
  });

  let array;
  it('returns a string', () => {
    array = ['foobar', 'foo', 'foolish'];
    expect(longestCommonPrefix(array)).to.equal("foo");
  });

});
