define(function () {
  'use strict';

  function Input(inputElem) {
    this.elem = inputElem;
  }

  Input.prototype.getInputElem = function () {
    return document.getElementById(this.elem);
  };

  Input.prototype.getValue = function () {
    return this.getInputElem().value;
  };

  return new Input('todo');

});
