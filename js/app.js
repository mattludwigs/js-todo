(function (Events, ToDo, Display) {

	function main() {
		// common objects for todo appp
		var todo = new ToDo("todo");
		var display = new Display("todo-list", {
			todo: todo
		});

		// Init Events for 
		var eventObj = new Events({
			addButton: "add-button",
			deleteButton: "delete-button",
			display: display,
			todo: todo
		});

		// init objects
		eventObj.init();
		display.init();


	}

	main();


})(Events, ToDo, Display);