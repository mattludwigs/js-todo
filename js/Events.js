(function (Events, ToDo) {

	function Events (options) {
		this.options = options;
	}

	Events.prototype = {

		init: function () {
			this.toDoObj = new ToDo("todo");
			this.addEvent();
			this.deleteEvent();
		},

		addEvent: function () {
			var addButton = document.getElementById(this.options.addButton),
					elem = this.toDoObj;

					console.log(document.getElementById(this.toDoObj.todo));

			addButton.addEventListener("click", function () {
				console.log(addButton);
				localStorage.setItem(elem.getValue(), elem.getValue());
			});
		},

		deleteEvent: function () {
			var deleteButton = document.getElementById(this.options.deleteButton);
			deleteButton.addEventListener("click", function () {
				console.log(deleteButton);
			});
		}

	}

	window.Events = Events;
})(window.Events = window.Events || {}, ToDo);
