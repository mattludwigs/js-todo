(function (Events, ToDo) {

	function main() {

		// Init Events for add and delete
		var eventObj = new Events({
			addButton: "add-button",
			deleteButton: "delete-button"
		});

		eventObj.init();


	}

	main();


})(Events, ToDo);