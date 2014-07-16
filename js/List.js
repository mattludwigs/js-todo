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
      this.list.childNodes[i].setAttribute('class', 'list-elem panel-body');
      listElem = document.querySelectorAll('.list-elem')[i];
      listElem.innerHTML = 'Hello';

      // Use console.log just for testing
      // console.log(this.list.childNodes[i]);
      console.log(listElem);
      console.log(localStorage);
    }
  };

  List.prototype.initList = function () {
    var i;
    console.log(localStorage);

    if (localStorage.length !== 0) {
      // testing console.log
      console.log("working");
      for (i = 0; i < localStorage.length; i++) {
        this.makeNewListItem();
      }
    } else {
      // testng console.log
      console.log('else');
      this.list.setAttribute('class', 'none');
    }
  };

  return new List('todo-list');

});
