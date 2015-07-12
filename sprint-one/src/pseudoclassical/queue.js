var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.indx = 0
  this.head = 0

};

 Queue.prototype.enqueue = function(value){
   this[this.indx] = value
   this.indx++
 }

Queue.prototype.dequeue = function(){
  var val = this[this.head]
  delete this[this.head]
  this.head++
  return val
}
