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
    expect(Array.isArray(twoSum(numbers, target))).to.equal(true);
  });

  it('returns an empty array if none of the numbers add up to the target number.', () => {
    numbers = [1, 2, 3];
    target = 7;
    expect(twoSum(numbers, target)).to.deep.equal([]);
  });

  it('returns the index of the two numbers that add up to equal the target number', () => {
    numbers = [1, 2, 3];
    target = 5;
    expect(twoSum(numbers, target)).to.deep.equal([1, 2]);
  });
});
