

var Graph = function(value){


};

Graph.prototype.addNode = function(node){
  this[node] = {value: node, edges: []}
};

Graph.prototype.contains = function(node){
  if(this[node]){
    return true
  } else{
    return false
  }
};

Graph.prototype.removeNode = function(node){
  delete this[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edges = this[fromNode].edges
  for(var i = 0; i < edges.length; i++){
    if(edges[i]===toNode)
      return true
  }
  return false
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges.push(toNode)
  this[toNode].edges.push(fromNode)

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromEdges = this[fromNode].edges
  var toEdges = this[toNode].edges
  var len;
  if(fromEdges.length >= toEdges.length){
    len = fromEdges.length
  } else{
    len = toEdges.length
  }
  for(var i = 0; i < len; i++){
    if(fromEdges[i] === toNode){
      fromEdges.splice(i,1)
    }
    if(toEdges[i]=== fromNode){
      toEdges.splice(i,1)
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var k in this){
    if(typeof this[k] === 'object')
    cb(k)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



