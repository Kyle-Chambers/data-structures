var Stack = function() {
  //   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  //   // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  var length = 0;
  var storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.length || 0;
};

stackMethods.push = function(value){
  if (this.storage){
    this.storage[length] = value;
  } else {
    this.storage = {};
    this.storage[length] = value;
  }

  if (this.length){
    this.length++;
  } else {
    this.length = 1;
  }

  return value;
};

stackMethods.pop = function(){
  if (this.storage) {

  }
};
