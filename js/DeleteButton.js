define(function () {

  'use strict';

  function DeleteButton(elem) {
    this.elem = elem;
  }

  DeleteButton.prototype.getDeleteElem = function () {
    return document.getElementById(this.elem);
  };

  DeleteButton.prototype.clearStorage = function () {
    this.getDeleteElem().onclick = function () {
      localStorage.clear();
      console.log('localStorage cleared!');
    };
  };

  return new DeleteButton('delete-button');

});
