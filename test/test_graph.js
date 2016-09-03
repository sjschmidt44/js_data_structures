'use strict';

const Graph = require('../lib/graph');
const expect = require('chai').expect;

describe('Graph Data Structure', () => {
  describe('new Graph()', () => {
    const graph = new Graph();
    it('should create a new Graph object', () => {
      expect(graph).to.be.instanceof(Graph);
    });
    it('should have no verticies', () => {
      const verticies = Object.keys(graph.verticies);
      expect(verticies.length).to.equal(0);
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
    const graph = new Graph();
    it('should return an edge between two verticies if exists', () => {

    });
    it('should return null if no edge exists between two verticies', () => {

    });
    it('should throw error if invalid verticies', () => {

    });
  });
  describe('neighbors()', () => {
    const graph = new Graph();
    it('should return any edges pointing to vertex', () => {

    });
    it('should return null if no edge exists', () => {

    });
    it('should throw error if invalid vertex', () => {

    });
  });
  describe('addVertex()', () => {
    const graph = new Graph();
    it('should add new vertex to graph', () => {
      graph.addVertex(23);
      const verticies = Object.keys(graph.verticies);
      expect(verticies.length).to.equal(1);
      expect(verticies[0]).to.equal('23');
    });
    it('should throw error if vertex already exists in graph', () => {
      graph.addVertex(23);
      expect(graph.addVertex(23)).to.be.instanceof(ReferenceError);
    });
    it('should throw error if invalid vertex value', () => {
      expect(graph.addVertex([2, 3, 4])).to.be.instanceof(TypeError);
    });
  });
  describe('removeVertex()', () => {
    const graph = new Graph();
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
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    it('should add new edge between two verticies', () => {
      graph.addEdge(10, 'a', 'b');
      expect(graph.verticies.a.b).to.equal(graph.verticies.b.a);
      expect(graph.verticies.a.b).to.equal(10);
    });
    it('should create adjacent verticies if not provided in args', () => {
      graph.addEdge(12);
    });
    it('should throw error on invalid edge val', () => {
      console.log(graph);

    });
  });
  describe('removeEdge()', () => {
    const graph = new Graph();
    it('should remove edge between two verticies', () => {

    });
    it('should throw error on invalid verticies', () => {

    });
    it('should throw error if no edge exists', () => {

    });
  });
  describe('breadthFirstTraversal()', () => {
    const graph = new Graph();
  });
  describe('depthFirstTraversal()', () => {
    const graph = new Graph();
  });
});
