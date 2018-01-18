var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.length++;
  this.storage[this.length -1] = value;
  return value;
};
queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return this.length;
};
