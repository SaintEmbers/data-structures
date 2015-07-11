var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.items = 0
  // Implement the methods below
  someInstance.push = function(value){
    // debugger
    storage[someInstance.items] = value;
    someInstance.items++
  };

  someInstance.pop = function(){
    someInstance.items--
    var endOfLine = storage[someInstance.items]
    return endOfLine
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
