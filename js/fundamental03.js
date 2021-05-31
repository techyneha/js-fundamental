// Empty Object

//Objet  creation formula
let printDetails = function(){
		console.log("---------- Person Details--------");
		console.log(this.name);
		console.log(this.age);
		console.log(this['address']);
	};

function PersonConstructor(name, age, address){

	return {
		name,
		age,
		address,
		printDetailsS: printDetails
	// 	printDetails: function(){
	// 	console.log("---------- Person Details--------");
	// 	console.log(this.name);
	// 	console.log(this.age);
	// 	console.log(this['address']);
	// }
	};
}

let person1 = PersonConstructor("Neha", 26, "Lucknow");
let printDetails1 =  person1.printDetailsS;
console.log(printDetails1);

let person2 = PersonConstructor("Neha", 26, "Lucknow");
let printDetails2 = person2.printDetailsS;

if (printDetails1 == printDetails2) {
	console.log("Two are similar object");
}
