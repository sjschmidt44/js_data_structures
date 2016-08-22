'use strict';

const Queue = require('../lib/queue.js');
const expect = require('chai').expect;

describe('Queue()', () => {
  let queue;
  describe('new Queue()', () => {
    it('should instantiate a new Queue object', () => {
      queue = new Queue();
      expect(queue).to.be.instanceof(Queue);
    });
    it('should have a front and back val of null', () => {
      queue = new Queue();
      expect(queue.front).to.equal(null);
      expect(queue.back).to.equal(null);
    });
  });

  describe('new Queue() with array arg', () => {
    it('should have a front val of 23', () => {
      queue = new Queue([23, 2, 10]);
      expect(queue.front.val).to.equal(23);
    });
    it('should have a back val of 10', () => {
      queue = new Queue([23, 2, 10]);
      expect(queue.back.val).to.equal(10);
    });
  });

  describe('enqueue()', () => {
    it('should have a front and back val of 12', () => {
      queue = new Queue();
      queue.enqueue(12);
      expect(queue.front.val).to.equal(12);
      expect(queue.back.val).to.equal(12);
    });
    it('should have a front val of 1 and back val of 2', () => {
      queue = new Queue([1, 3, 4, 2]);
      expect(queue.front.val).to.equal(1);
      expect(queue.back.val).to.equal(2);
    });
    it('should throw an error if no arg', () => {
      queue = new Queue();
      expect(queue.enqueue()).to.be.instanceof(ReferenceError);
    });
  });

  describe('dequeue()', () => {
    it('should remove and return val from front of queue', () => {
      queue = new Queue([2, 32, 1]);
      let dequeueVal = queue.dequeue();
      expect(dequeueVal).to.equal(2);
    });
    it('should have a front and back val of 1', () => {
      queue = new Queue([32, 1]);
      queue.dequeue();
      expect(queue.front.val).to.equal(1);
      expect(queue.back.val).to.equal(1);
    });
    it('should have a front and back val of null', () => {
      queue = new Queue([1]);
      queue.dequeue();
      expect(queue.front).to.equal(null);
      expect(queue.back).to.equal(null);
    });
    it('should throw error if queue is empty', () => {
      queue = new Queue();
      expect(queue.dequeue()).to.be.instanceof(ReferenceError);
    });
  });
});
