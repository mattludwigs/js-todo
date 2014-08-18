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
    } 

  }


  window.ToDo = ToDo;

})(window.ToDo = window.ToDo || {})