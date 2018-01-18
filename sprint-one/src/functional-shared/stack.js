
var extend = function (obj, methods) {
  for (var key in methods){
    obj[key] = methods[key];
  }
}

var Stack = function() {
  //   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  //   // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  someInstance.length = 0;
  someInstance.storage = {};

  //_.extend(someInstance, stackMethods); **** determine why dis isn't working
  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.length;
};

stackMethods.push = function(value){
  this.length++;
  this.storage[this.length -1] = value;
  return value;
};

stackMethods.pop = function(){
  var save;
  if (this.length) {
    save = this.storage[this.length -1];
    delete this.storage[this.length -1];
    this.length--;
  }
  return save;
};
