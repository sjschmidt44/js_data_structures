'use strict';

const Stack = require('../lib/stack.js');
const expect = require('chai').expect;

describe('Stack()', () => {
  let stack;
  describe('new Stack()', () => {
    stack = new Stack();
    it('should instantiate a new Stack object', () => {
      expect(stack).to.be.instanceof(Stack);
    });
    it('should have a null head value', () => {
      expect(stack.top).to.equal(null);
    });
    it('should have a size of 0', () => {
      expect(stack.size).to.equal(0);
    });
  });

  describe('new Stack() with max size', () => {
    it('should have a maxSize val of 4', () => {
      stack = new Stack(null, 4);
      expect(stack.maxSize).to.equal(4);
    });
  });

  describe('new Stack() with array arg', () => {
    stack = new Stack([2, 23, 32, 43, 50]);
    it('should have a size of 5', () => {
      expect(stack.size).to.equal(5);
    });
    it('should have a top val of 50', () => {
      expect(stack.top.val).to.equal(50);
    });
  });

  describe('push()', () => {
    stack = new Stack();
    it('should add new val to top of stack', () => {
      stack.push(3);
      expect(stack.top.val).to.equal(3);
    });
    it('should increase size of stack', () => {
      let stackSize = stack.size;
      stack.push(54);
      expect(stackSize).to.equal(stack.size - 1);
    });
    it('should throw error when max size exceeded', () => {
      stack = new Stack([4, 3, 2, 1]);
      expect(stack.push(5)).to.be.isntanceof(TypeError);
    });
    it('should throw error if no arg', () => {
      expect(stack.push()).to.be.instanceof(ReferenceError);
    });
  });

  describe('pop()', () => {
    stack = new Stack([43, 12]);
    it('should remove and return top val of stack', () => {
      expect(stack.pop()).to.equal(12);
      expect(stack.top.val).to.equal(43);
    });
    it('should throw error if stack is empty', () => {
      stack.pop();
      expect(stack.pop()).to.be.instanceof(TypeError);
    });
  });

  describe('peek()', () => {
    it('should return top val of stack, without removal', () => {
      stack = new Stack([43, 90, 88]);
      expect(stack.peek()).to.equal(88);
      expect(stack.top.val).to.equal(88);
    });
    it('should throw error if stack is empty', () => {
      stack = new Stack();
      expect(stack.peek()).to.be.isntanceof(TypeError);
    });
  });
});
