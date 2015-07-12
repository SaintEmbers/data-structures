var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {}
  queue.indx = 0
  queue.front = 0

  _.extend(queue, queueMethods)
  return queue
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.indx] = value
  this.indx++
}
queueMethods.dequeue = function(){
  var value = this[this.front]
  delete this[this.front]
  this.front++
  return value
}


