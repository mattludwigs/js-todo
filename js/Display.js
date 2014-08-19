(function () {

	function Display(elemId, options) {
		this.elemId = elemId;
		this.options = options;
	};


	Display.prototype = {

		init: function () {	
			window.addEventListener("load", this.displayStorage.bind(this));
		},

		displayElem: function () {
			return document.getElementById(this.elemId);
		},

		checkStorage: function () {
			if (localStorage.length > 0) {
				this.displayElem().classList.add("well");
				return true;
			} 
			return false;
		},

		displayStorage: function () {
			if (this.checkStorage()) {
				this.displayHTML();
			} 
		},

		displayHTML: function () {
			var i;

			for (i = 0; i < localStorage.length; i++) {
				var html = document.createElement("div");
				html.innerHTML = "<h2>" + localStorage.getItem(localStorage.key(i)) + "</h2><input type='checkbox' /> Delete<hr>";
				this.displayElem().appendChild(html);
			}
		},

		addToDo: function () {
			var value = this.options.todo.getValue(),
					html = document.createElement("div");

			if (!this.displayElem().classList.contains("well")) {
				this.checkStorage();
			}

			if (this.displayElem().style.display === "none") {
				this.displayElem().style.display = "block";
			}
	
			html.innerHTML = "<h2>" + value + "</h2><input type='checkbox' /> Delete<hr>";
			this.displayElem().appendChild(html);
			this.options.todo.clearValue();
		},

		none: function () {
			this.displayElem().style.display = "none";
		}

	}

	window.Display = Display;


})(window.Display = window.Display || {});
