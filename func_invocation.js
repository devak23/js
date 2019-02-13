(function() {
	function ninja() {
		return this;
	}

	function samurai() {
		"use strict";
		return this;
	}


	console.log(ninja()); //global
	console.log(samurai()); // undefined

})();