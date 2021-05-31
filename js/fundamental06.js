let getDetails = function() {
	return "My name is " + this.name + " and I am from " + this.address + " and I am " + this.age + " years old.";
};
// Person object constructor == formula for creating person objects from values
function PersonConstructor(name, address, age) {
	// empty object
	//let personObj = {};

	//property creation and assignments
	// personObj.name = name;
	// personObj.address = address;
	// personObj.age = age;

	// new
	this.name = name;
	this.address = address;
	this.age = age;

	this.details = getDetails;

	//using the above created function --> getDetails
	// personObj.details = function() {
	// 	return "My name is " + personObj.name + " and I am from " + personObj.address + " and I am " + personObj.age + " years old.";
	// };

	// returns the above created object;
	//return personObj;
}
//always use new keyword to call constructor object
let person1 = new PersonConstructor("Neha", "Lucknow", 26);
// console.log(person1);
console.log(person1.details());

let person2 = new PersonConstructor("Mehak", "Noida", 28);
console.log(person2.details());

console.log(person1.details == person2.details);