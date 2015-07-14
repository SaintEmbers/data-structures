var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value)
    if(list.head === null){
      list.head = node
      list.tail = list.head
    } else{
      var currentTail = list.tail
      currentTail.next = node
    }
      list.tail = node
  };

  list.removeHead = function(){
    // debugger
    var currentHead = list.head
    console.log(list.head)
    list.head = list.head.next
    return currentHead.value

  };

  list.contains = function(target){
    var isThere = false
    function find(node){
      if(node.value === target){
         isThere = true
      } else if(node.next){
        find(node.next)
      }
    }
    find(list.head)
    return isThere
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
