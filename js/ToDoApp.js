define(['AddButton', 'Input', 'DeleteButton', 'List'], function (AddButton, Input, DeleteButton, List) {
  'use strict';

  function ToDoApp() {
    this.version = "0.1.0";
    this.button = AddButton;
    this.input = Input;
    this.delete = DeleteButton;
  }

  ToDoApp.prototype.init = function () {
    this.initEvents();
    // Below code is used for testing
    console.log(List.getListElem());
    List.makeNewListItem();
  };

  ToDoApp.prototype.initEvents = function () {
    var button,
        input,
        dlete;

    // Store in var so they different properties play nicely with each other
    button = this.button;
    input = this.input;
    dlete = this.delete;

    // Save event, gets value from input via callback
    button.save(function () {
      return input.getValue();
    });

    // Deleete Button event, wipes out localStorage
    dlete.clearStorage();
  };

  return new ToDoApp();

});
