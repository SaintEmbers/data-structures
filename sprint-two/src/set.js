var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item
};

setPrototype.contains = function(item){
  var isThere = false
  for(var k in this._storage){
    if(this._storage[k] === item)
      isThere = true
  }
  return isThere
};

setPrototype.remove = function(item){
  if(this.contains(item)){
    delete this._storage[item]
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
