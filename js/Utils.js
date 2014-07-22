define([],
	function () {
		'use strict';

		function Utils() {

		};

		Utils.prototype = {
			
			// Loop through localStorage object
			storageLoop: function () {
				var i;

				for(i = 0; i < localStorage.length; i++) {
					return localStorage['todo' + i.toString()];
				}
			}
		};

		return new Utils();

	});
