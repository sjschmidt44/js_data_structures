'use strict';

const Queue = require('../lib/queue.js');
const expect = require('chai').expect;

describe('Queue()', () => {
  let queue;
  describe('new Queue()', () => {
    before(() => {
      queue = new Queue();
    });
    it('should instantiate a new Queue object', () => {
      expect(queue).to.be.instanceof(Queue);
    });
    it('should have a front and back val of null', () => {
      expect(queue.front).to.equal(null);
      expect(queue.back).to.equal(null);
    });
  });

  describe('new Queue() with array arg', () => {
    before(() => {
      queue = new Queue([23, 2, 10]);
    });
    it('should have a front val of 23', () => {
      expect(queue.front.val).to.equal(23);
    });
    it('should have a back val of 10', () => {
      expect(queue.back.val).to.equal(10);
    });
  });

  describe('enqueue()', () => {
    before(() => {
      queue = new Queue();
    });
    it('should have a front and back val of 12', () => {
      queue.enqueue(12);
      expect(queue.front.val).to.equal(12);
      expect(queue.back.val).to.equal(12);
    });
    it('should throw an error if no arg', () => {
      expect(queue.enqueue()).to.be.instanceof(ReferenceError);
    });
  });

  describe('dequeue()', () => {
    before(() => {
      queue = new Queue([2, 32, 1]);
    });
    it('should remove and return val from front of queue', () => {
      let dequeueVal = queue.dequeue();
      expect(dequeueVal).to.equal(2);
    });
    it('should have a front and back val of 1', () => {
      expect(queue.front.val).to.equal(32);
      expect(queue.back.val).to.equal(1);
      queue.dequeue();
      expect(queue.front.val).to.equal(1);
      expect(queue.back.val).to.equal(1);
    });
    it('should throw error if queue is empty', () => {
      queue = new Queue();
      expect(queue.dequeue()).to.be.instanceof(ReferenceError);
    });
  });
});
