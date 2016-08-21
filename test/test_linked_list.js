'use strict';

const LinkedList = require('../lib/linked_list.js');
const expect = require('chai').expect;

describe('single Linked List', () => {
  describe('new linked list', () => {
    let ll = new LinkedList();
    it('should create a new empty linked list', () => {
      expect(typeof ll).to.equal('object');
      expect(ll.head).to.equal(null);
      expect(ll.length).to.equal(0);
    });
  });

  describe('new linked list with array arg', () => {
    let llWithArray,
      arr = [23, 43, 3, 1, 0, 98, 39, 44, 999, 100];
    before(() => {
      llWithArray = new LinkedList(arr);
    });

    it('should create a new linked list with each array value as a node', () => {
      expect(llWithArray.size()).to.equal(arr.length);
      expect(llWithArray.head.val).to.equal(100);
    });
  });

  describe('insert()', () => {
    let ll = new LinkedList();
    it('should insert new val at head of linked list', () => {
      ll.insert(1);
      expect(ll.head.val).to.equal(1);
      ll.insert(2);
      expect(ll.head.val).to.equal(2);
    });

    it('should throw error if no arg', () => {
      expect(ll.insert()).to.be.instanceof(ReferenceError);
    });
  });

  describe('size()', () => {
    it('should return the number of nodes in the list', () => {
      let ll = new LinkedList();
      ll.insert(100);
      ll.insert(99);
      expect(ll.size()).to.equal(2);
      ll.pop();
      expect(ll.size()).to.equal(1);
    });

    it('should throw error if list is empty', () => {
      let ll = new LinkedList();
      expect(ll.size()).to.be.instanceof(RangeError);
    });
  });

  describe('remove()', () => {
    let ll = new LinkedList([23, 4, 1, 22, 99]);
    ll.remove(99);
    it('should remove 99 from [23, 4, 1, 22, 99]', () => {
      expect(ll.head.val).to.equal(22);
    });

    it('should throw error if no arg', () => {
      expect(ll.remove()).to.be.instanceof(ReferenceError);
    });

    it('should throw error if value not in list', () => {
      expect(ll.remove(100000)).to.be.instanceof(ReferenceError);
    });
  });

  describe('pop()', () => {
    let ll = new LinkedList([22, 99]);
    it('should remove value at head and return', () => {
      let val = ll.pop();
      expect(val).to.equal(99);
    });

    it('should reduce the size of the list', () => {
      expect(ll.size()).to.equal(1);
      ll.pop();
      expect(ll.size()).to.be.instanceof(RangeError);
    });

    it('should throw error if list is empty', () => {
      expect(ll.pop()).to.be.instanceof(TypeError);
    });
  });

  describe('search()', () => {
    let ll = new LinkedList([100, 4, 68]);
    it('should return val if val exists in list', () => {
      expect(ll.search(4)).to.equal(4);
    });

    it('should return false if val does not exist in list', () => {
      expect(ll.search(1)).to.equal(false);
    });

    it('should throw error if no arg', () => {
      expect(ll.search()).to.be.instanceof(ReferenceError);
    });
  });

  describe('display()', () => {
    let ll = new LinkedList([24, 43, 5]);
    it('should return [5, 43, 24]', () => {
      expect(ll.display()).to.equal('5,43,24');
    })
  });
});
