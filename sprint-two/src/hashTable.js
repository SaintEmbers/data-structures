var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || []
  for(var j = 0; j < bucket.length; j++){
    var pair = bucket[j]
    if(pair[0] === k){
      pair[1] = v
      return
    }
  }
  var duple = [k,v]
  bucket.push(duple)
  this._storage.set(i, bucket)
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || []
  var val;
  for(var j = 0; j < bucket.length; j++){
  // debugger
    var pair = bucket[j]
    if(pair[0] === k){
      val = pair[1]
      return val
    }
  }
  return null
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || []
  for(var j = 0; j < bucket.length; j++){
    var pair = bucket[j]
    if(pair[0]===k){
      bucket.splice(j,1)
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
