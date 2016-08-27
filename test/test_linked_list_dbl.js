'use strict';

const DoubleLinked = require('../lib/linked_list_dbl');
const expect = require('chai').expect;

describe('DoubleLinked()', () => {
  let dl;
  describe('new DoubleLinked list', () => {
    it('should instantiate a new DoubleLinked list object', () => {
      dl = new DoubleLinked();
      expect(dl).to.be.instanceof(DoubleLinked);
    });
    it('should return null value at front of list', () => {
      expect(dl.head).to.equal(null);
    });
    it('should return null value at tail of list', (() => {
      expect(dl.tail).to.equal(null);
    }));
  });
  describe('new DoubleLinked list with array arg, [12, 32, 43, 2]', () => {
    it('should return a value of 2 at head of list', () => {
      dl = new DoubleLinked([12, 32, 43, 2]);
      expect(dl.head.val).to.equal(2);
    });
    it('should return a value of 12 at tail of list', (() => {
      dl = new DoubleLinked([12, 32, 43, 2]);
      expect(dl.tail.val).to.equal(12);
    }));
  });
  describe('insert()', () => {
    it('should insert a new value at the head of the list', () => {
      dl = new DoubleLinked();
      dl.insert(2);
      expect(dl.head.val).to.equal(2);
      expect(dl.tail.val).to.equal(2);
      dl.insert(1);
      expect(dl.head.val).to.equal(1);
      expect(dl.tail.val).to.equal(2);
      dl.insert(4);
      expect(dl.head.val).to.equal(4);
      expect(dl.tail.val).to.equal(2);
    });
    it('should throw error if no arg', () => {
      expect(dl.insert()).to.be.instanceof(ReferenceError);
    });
  });
  describe('append()', () => {
    it('should insert a new value at the tail of the list', () => {

    });
    it('should throw error if no arg', () => {

    });
  });
  describe('pop()', () => {
    it('should remove a value at the head of the list', () => {

    });
    it('should throw error if list is empty', () => {

    });
  });
  describe('shift', () => {
    it('should remove the value at the tail of the list', () => {

    });
    it('should throw error if list is empty', () => {

    });
  });
  describe('remove()', () => {
    it('should remove the first matching value from the head of the list', () => {

    });
    it('should throw error if no arg', () => {

    });
    it('should throw error if list is empty', () => {

    });
  });
});
