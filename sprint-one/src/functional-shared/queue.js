var extend = function (obj, methods) {
  for (var key in methods){
    obj[key] = methods[key];
  }
}


var Queue = function() {

  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  extend(someInstance, queueMethods);

  return someInstance;
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
