var Stack = function() {
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    length++;
    storage[length -1] = value;
    return value;
  };

  someInstance.pop = function() {
    var save;
    if (length){
      save = storage[length -1];
      delete storage[length -1];
      length--;
    }
    return save;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
