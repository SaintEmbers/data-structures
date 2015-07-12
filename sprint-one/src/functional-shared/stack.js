var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var
  var stack = {}

  // debugger

  stack.items = 0
  var index = 0
  stack[index];
  _.extend(stack, stackMethods)
  return stack
};

var stackMethods = {};

stackMethods.push = function(value){
  // var index = 0
  this[this.items] = value
  this.items++
  // this.index++
}
stackMethods.pop = function(){
  if(this.items >= 1){
    this.items--
    var value = this[this.items]
    delete this[this.items]
    return value
  } else{
    this.items === 0
  }
}

stackMethods.size = function(){
  return this.items;
}

