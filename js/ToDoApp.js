'use strict';

// only global app var
var app;

function ToDoList() {
  this.version = "0.1.0";
  this.button = '';
  this.input = '';
  this.delete = '';
}

ToDoList.prototype.init = function () {
  this.buildObjs();
  this.initEvents();
};

ToDoList.prototype.buildObjs = function () {
  // Instantiate New App Objects
  this.button = new AddButton('add-button');
  this.input = new Input('todo');
  this.delete = new DeleteButton('delete-button');
};

ToDoList.prototype.initEvents = function () {
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

// Instantiate ToDoList and launch App
app = new ToDoList();
app.init();
