var Queue = function() {
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    length++;
    storage[length -1] = value;
    return value;
  };

  someInstance.dequeue = function() {
    var save = storage[0];
    for (var index in storage){
      storage[index -1] = storage[index];
    }
    if (length){
      length--;
    }
    delete storage[-1];
    return save;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
