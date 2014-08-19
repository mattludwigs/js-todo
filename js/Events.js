(function () {

	function Events (options) {
		this.options = options;
	}

	Events.prototype = {

		init: function () {
			this.addEvent();
			this.deleteEvent();
		},

		addEvent: function () {
			var addButton = document.getElementById(this.options.addButton),
					elem = this.options.todo,
					dis = this.options.display;

			addButton.addEventListener("click", function () {
				localStorage.setItem(elem.getValue(), elem.getValue());
				dis.addToDo();
			});
		},

		deleteEvent: function () {
			var deleteButton = document.getElementById(this.options.deleteButton),
					dis = this.options.display;

			deleteButton.addEventListener("click", function () {
				localStorage.clear();
				dis.displayElem().innerHTML = "";
				dis.none();
			});
		}

	}

	window.Events = Events;
})(window.Events = window.Events || {});
