(function () {

  function ToDo(todoElem) {
    this.todo = todoElem;
  }

  ToDo.prototype = {

    getValue: function () {
      return document.getElementById(this.todo).value;
    },

    HTMLElem: function () {
      return document.getElementById(this.todo);
    },

    clearValue: function () {
      document.getElementById(this.todo).value = "";
    } 

  }

  window.ToDo = ToDo;

})(window.ToDo = window.ToDo || {})