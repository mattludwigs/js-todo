(function (Events) {

	function Events (options) {
		this.options = options;
	}

	Events.prototype = {

		init: function () {
			this.addEvent();
			this.deleteEvent();
		},

		addEvent: function () {
			var addButton = document.getElementById(this.options.addButton);
			addButton.addEventListener("click", function () {
				console.log(addButton);
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
})(window.Events = window.Events || {});
