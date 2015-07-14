var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
// debugger
  this.children.push(Tree(value))
};

treeMethods.contains = function(target){
  console.log('this',this)
  // debugger
  var isThere = false
  var found = function(node){
// debugger
    if(node.children)
    for(var i = 0; i < node.children.length; i++){
      if(node.children[i].value === target){
        isThere = true
      } else{
        found(node.children[i])
      }
    }
  }
  found(this)
  return isThere
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
