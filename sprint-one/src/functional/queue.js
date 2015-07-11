var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.items = 0;
  someInstance.head = 0;
  someInstance.indx = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[someInstance.indx] = value
    someInstance.items++
    someInstance.indx++
  };

  someInstance.dequeue = function(){
    var val = storage[someInstance.head]
    delete storage[someInstance.head]
    someInstance.items--
    someInstance.head++
    return val
  };

  someInstance.size = function(){
    if(someInstance.items >= 0){
      return someInstance.items
    } else{
      return 0
    }
  };

  return someInstance;
};
