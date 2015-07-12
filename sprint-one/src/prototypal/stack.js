var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack  = Object.create(stackMethods)
  stack.items = 0

  return stack
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.items] = value
  this.items++
}

stackMethods.pop = function(){
  if(this.items > 0)
  this.items--
  var value = this[this.items]
  delete this[this.items]
  return value
}

stackMethods.size = function(){
  return this.items
}
