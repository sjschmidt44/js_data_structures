'use strict';

const uuid = require('node-uuid');

function Graph(array) {
  // add functionality to handle array of objects to build Graph
  this.verticies = {};
}

Graph.prototype.adjacent = function(vertexOne, vertexTwo) {
  try {
    if (typeof vertexOne !== 'string' && typeof vertexTwo !== 'string') {
      throw new ReferenceError('Invalid verticies');
    }
    return this.verticies[vertexOne][vertexTwo] || null;
  } catch (e) {
    return e;
  }
};

Graph.prototype.neighbors = function(vertex) {
  try {
    if (typeof vertex !== 'string') {
      throw new ReferenceError('Invalid verticies');
    }
    return Object.keys(this.verticies[vertex]).toString() || null;
  } catch (e) {
    return e;
  }
};

Graph.prototype.addVertex = function(val) {
  try {
    const verticies = Object.keys(this.verticies);

    if (typeof val !== 'string' && typeof val !== 'number') {
      throw new TypeError('Vertex value must be string or number');
    }

    for (var idx in verticies) {
      // refactor this to use getVerticies()
      if (val.toString() === verticies[idx]) {
        throw new ReferenceError('Vertex already exists in graph');
      }
    }
    this.verticies[val] = {};
  } catch (e) {
    return e;
  }
};

Graph.prototype.removeVertex = function(vertex) {
  try {
    if (this.getVerticies().indexOf(vertex) === -1) {
      throw new ReferenceError('Vertex does not exist in graph');
    }
    delete this.verticies[vertex];
    for (let v in this.verticies) {
      if (this.verticies[v][vertex]) {
        delete this.verticies[v][vertex];
      }
    }
  } catch (e) {
    return e;
  }
};

Graph.prototype.addEdge = function(weight, vertexOne, vertexTwo) {
  let v1 = vertexOne;
  let v2 = vertexTwo;
  try {
    if (!weight) throw new ReferenceError('Please enter a weight for this edge.');
    if (typeof weight !== 'number') throw new TypeError('Edge value must be number');
    if (this.getVerticies().indexOf(v1) === -1) {
      v1 = uuid.v1().substr(0, 8);
      this.addVertex(v1);
    }
    if (this.getVerticies().indexOf(v2) === -1) {
      v2 = uuid.v1().substr(0, 8);
      this.addVertex(v2);
    }
    this.verticies[v1][v2] = weight;
    this.verticies[v2][v1] = weight;
  } catch (e) {
    return e;
  }
};

Graph.prototype.removeEdge = function(vertexOne, vertexTwo) {
  try {
    delete this.verticies[vertexOne][vertexTwo];
    delete this.verticies[vertexTwo][vertexOne];
  } catch (e) {
    return e;
  }
};

Graph.prototype.getEdges = function() {
  let edges = [];
  for (let v1 in this.verticies) {
    for (let v2 in this.verticies[v1]) {
      edges.push(v2 + ': ' + this.verticies[v1][v2]);
    }
  }
  return edges;
};

Graph.prototype.getVerticies = function() {
  return Object.keys(this.verticies);
};

Graph.prototype.breadthFirstTraversal = function(start) {

};

Graph.prototype.depthFirstTraversal = function(start) {

};

module.exports = Graph;
