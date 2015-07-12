var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods)
  queue.index = 0
  queue.front = 0
  return queue
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.index] = value
  this.index++
}

queueMethods.dequeue = function(){
  var value = this[this.front]
  delete this[this.front]
  this.front++
  return value
}

