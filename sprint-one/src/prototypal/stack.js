var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.size = function (){
  return this.length;
}


stackMethods.push = function (value){
  this.length++;
  this.storage[this.length -1] = value;
  return value;
}

stackMethods.pop = function (){
  var save;
  if (this.length) {
    save = this.storage[this.length -1];
    delete this.storage[this.length -1];
    this.length--;
  }
  return save;
}
