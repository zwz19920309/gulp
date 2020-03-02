const { expect } = require('chai');
const { add, mul, cover } = require('../src/script/math');

describe('#math', () => {
  describe('add', () => {
    it('should return 5 where 2 + 3', () => {
      expect(add(2, 3)).to.equal(5);
    })
    it('should return 5 where 2 + -1', () => {
      expect(add(2, -1)).to.equal(1);
    })
  });
  describe('mul', () => {
    it('should return 6 where 2 * 3', () => {
      expect(mul(2, 3)).to.equal(6);
    })
  });
  describe('cover', () => {
    it('should return 1  where cover(2, 1)', () => {
      expect(cover(2, 3)).to.equal(3);
    })
    it('should return 4  where cover(2, 2)', () => {
      expect(cover(2, 2)).to.equal(4);
    })
    it('should return 1  where cover(2, 1)', () => {
      expect(cover(2, 1)).to.equal(1);
    })
  });
});