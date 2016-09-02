'use strict';

function Graph(array) {
  // add functionality to handle array of objects to build Graph
  this.verticies = {};
}

Graph.prototype.adjacent = function(vertexOne, vertexTwo) {
  // Return an edge between vertex v1 & v2 if exists
};

Graph.prototype.neighbors = function(vertex) {
  // return any edges pointing to vertex
};

Graph.prototype.addVertex = function(val) {
  try {
    if (typeof val !== 'string' || typeof val !== 'number') {
      throw new TypeError('Vertex value must be string or number');
    }
    this.verticies[val] = {};
  } catch (e) {
    return e;
  }
};

Graph.prototype.removeVertex = function(val) {
  // remove vertex from graph and remove pointers/edges
};

Graph.prototype.addEdge = function(weight, vertexOne, vertexTwo) {
  // add new edge to graph; implicitly add verticies if none supplied
};

Graph.prototype.removeEdge = function(vertexOne, vertexTwo) {
  // Remove edge pointer from two verticies
};

Graph.prototype.breadthFirstTraversal = function(start) {

};

Graph.prototype.depthFirstTraversal = function(start) {

};

module.exports = Graph;
