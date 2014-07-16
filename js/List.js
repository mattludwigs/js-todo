define(function () {

  'use strict';

  function List(elem) {
    this.list = document.getElementById(elem);
  }

  List.prototype.getListElem = function () {
    return this.list;
  };

  List.prototype.makeNewListItem = function () {
    var i, listElem;

    for (i = 0; i < localStorage.length; i++) {

      listElem = document.createElement('div');
      this.list.appendChild(listElem);
      this.list.childNodes[i].setAttribute('class', 'list-elem');
      // Use console.log just for testing
      console.log(this.list.childNodes[i]);
      console.log(listElem);
      console.log(localStorage);
    }
  };

  return new List('todo-list');

});
