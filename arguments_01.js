(function() {
	// "use strict";
	
	function infiltrate(person) {
		console.assert(person === 'gardener', 'Expected gardener,  found ' + person);
		console.assert(arguments[0] === 'gardener', 'Expected gardener,  found ' + arguments[0]);

		person = 'plumber';
		console.assert(person === 'plumber', 'Expected plumber,  found ' + person);
		console.assert(arguments[0] === 'plumber', 'Expected plumber,  found ' + arguments[0]);


		arguments[0] = 'ninja';
		
		console.assert(arguments[0] === 'ninja', 'Expected ninja,  found ' + arguments[0]);
		console.assert(person === 'ninja', 'Expected ninja,  found ' + person);

		console.log('success');
	}	

	infiltrate('gardener');
})();

