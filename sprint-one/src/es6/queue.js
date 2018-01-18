class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  size () {
    return this.length;
  }

  enqueue (value) {
    this.storage[this.length] = value;
    this.length++;
    return this.value;
  }

  dequeue () {
    var keep = this.storage[0];// first

    for (var key in this.storage){ // shift all items down
      this.storage[key -1] = this.storage[key];
    }
    delete this.storage[-1];

    if (this.length){
      this.length--;
    }

    return keep;
  }

}
