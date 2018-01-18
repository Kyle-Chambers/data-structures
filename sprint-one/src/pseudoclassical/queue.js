var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[this.length -1] = value;
  return value;
};

Queue.prototype.dequeue = function() {
  var save = this.storage[0];
  for (var index in this.storage){
    this.storage[index -1] = this.storage[index];
  }

  if (this.length){
    this.length--;
  }

  delete this.storage[-1];
  return save;
};
