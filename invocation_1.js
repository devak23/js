(function() {

	"use strict";

	let Ninja = function() {
		this.skulk = function() {
			return true;
		}
		this.greet = function(name) {
			return "Hello " + name + "!";
		}

		return "dummy"; // returning 1 has no effect on the objects created below
	}

	let ninja = new Ninja();
	console.log(ninja.greet("terry"));
	console.log(ninja.skulk());

	let smaurai = new Ninja();
	console.log(smaurai.greet("abhay"));
	console.log(smaurai.skulk());



	let puppet = {
		rules: false
	};

	function Emperor(name) {
		this.name = name
		this.rules = true;
		this.makeRule = function() {
			return name + " made a new rule.";
		}

		return puppet;
	}

	let emperor = new Emperor('Simon');
	console.log(emperor === puppet);
	//console.log(emperor.makeRule());


})();