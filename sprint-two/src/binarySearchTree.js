var BinarySearchTree = function(value){

  var tree = Object.create(BinarySearchTree.prototype)

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree
};

BinarySearchTree.prototype.insert = function(value){
  console.log(this)
  if(value < this.value){
    if(this.left === null){
      this.left = BinarySearchTree(value)
    } else{
      this.left.insert(value)
    }
  }
  if(value > this.value){
    if(this.right === null){
      this.right = BinarySearchTree(value)
    } else{
      this.right.insert(value)
    }
  }
  return "Already in the Tree!"
}

BinarySearchTree.prototype.contains = function(val){

  if(val === this.value){
    return true
  }
  if(val < this.value){
    if(this.left === null){
      return false
    } else{
      return this.left.contains(val)
    }
  }
  if(val > this.value){
    if(this.right === null){
      return false
    } else{
      console.log('right:',this.right)
      return this.right.contains(val)
    }
  }


}

BinarySearchTree.prototype.depthFirstLog = function(cb){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
