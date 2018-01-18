var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};


Stack.prototype.size = function (){
  return this.length;
}


Stack.prototype.push = function (value){
  this.length++;
  this.storage[this.length -1] = value;
  return value;
}

Stack.prototype.pop = function (){
  var save;
  if (this.length) {
    save = this.storage[this.length -1];
    delete this.storage[this.length -1];
    this.length--;
  }
  return save;
}
