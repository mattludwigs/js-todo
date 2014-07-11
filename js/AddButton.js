'use strict';

function AddButton(elem) {
  this.elem = elem;
}

AddButton.prototype.getElem = function () {
  return document.getElementById(this.elem);
};

// Save using callback to interact with methods from other objects
AddButton.prototype.save = function (cb) {
  var self = this;

  this.getElem().onclick = function () {
    var value = cb();
    self.validStroage(value);
  };
};

AddButton.prototype.validStroage = function (value) {
  var count = 0;

  if (value !== '') {
    localStorage.setItem("todo" + count, value);
    // add logical to check todo count
    count += 1;
    this.displayToDos();
  } else {
    throw new Error("Must have something todo");
  }
};

AddButton.prototype.displayToDos = function () {
  var i;

  // for every todo in localStorage
  for (i = 0; i < localStorage.length; i += 1) {
    // actually display localStroage
    console.log('check');
  }
};
