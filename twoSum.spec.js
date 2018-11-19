const { expect } = require('chai');
const twoSum = require('./twoSum');

describe("twoSum", () => {
  it('is a function', () => {
    expect(typeof twoSum).to.equal("function");
  });

  let numbers, target;

  it('returns an array', () => {
    numbers = [1, 2, 3];
    target = 5;
    expect(twoSum([1, 2, 3], 5)).to.equal([1, 2]);
  });
});
