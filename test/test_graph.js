'use strict';

const Graph = require('../lib/graph');
const expect = require('chai').expect;

describe('Graph Data Structure', () => {
  describe('new Graph()', () => {
    it('should create a new Graph object', () => {

    });
  });
  describe('new Graph() with args', () => {
    it('should create a new Graph object with edges and verticies', () => {

    });
    it('should throw error on duplicate verticies', () => {

    });
    it('should throw error on invalid args', () => {

    });
  });
  describe('adjacent()', () => {
    it('should return an edge between two verticies if exists', () => {

    });
    it('should return null if no edge exists between two verticies', () => {

    });
    it('should throw error if invalid verticies', () => {

    });
  });
  describe('neighbors()', () => {
    it('should return any edges pointing to vertex', () => {

    });
    it('should return null if no edge exists', () => {

    });
    it('should throw error if invalid vertex', () => {

    });
  });
  describe('addVertex()', () => {
    it('should add new vertex to graph', () => {

    });
    it('should throw error if vertex already exists in graph', () => {

    });
    it('should throw error if invalid vertex value', () => {

    });
  });
  describe('removeVertex()', () => {
    it('should remove and return vertex from list', () => {

    });
    it('should remove any edges pointing to vertex', () => {

    });
    it('should throw error if edge does not exist', () => {

    });
    it('should throw error if invalid vertex value', () => {

    });
  });
  describe('addEdge()', () => {
    it('should add new edge between two verticies', () => {

    });
    it('should create adjacent verticies if not provided in args', () => {

    });
    it('should throw error on invalid edge val', () => {

    });
  });
  describe('removeEdge()', () => {
    it('should remove edge between two verticies', () => {

    });
    it('should throw error on invalid verticies', () => {

    });
    it('should throw error if no edge exists', () => {

    });
  });
  describe('breadthFirstTraversal()', () => {

  });
  describe('depthFirstTraversal()', () => {

  });
});
