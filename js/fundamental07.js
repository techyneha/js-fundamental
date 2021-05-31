//Sharing function across objects via Prototype

// let getDetails = function() {
// 	return "Name : " + this.name + " and " + this.address + " and I am " + this.age + " years old.";
// };

// Person object constructor == formula for creating person objects from values
function PersonConstructor(name, address, age) {
	this.name = name;
	this.address = address;
	this.age = age;

	// using the above created function object --> getDetails
	//this.details = getDetails;
}
// Shared function
PersonConstructor.prototype.details = function() {
	return "Name : " + this.name + " and "  + this.age + " years old.";
};

PersonConstructor.prototype.doSomething = function(){
	console.log("Doing Something");
};


PersonConstructor.details = function() {
	return "Name : " + this.name + " and "  + this.age + " years old.";
};

PersonConstructor.details();

let person1 = new PersonConstructor("Neha", "Lucknow", 26);
console.log(person1.details());

person1.doSomething();

let person2 = new PersonConstructor("Mehak", "Noida", 28);
console.log(person2.details());
person2.doSomething();


console.log(person1.details == person2.details);

// let result = getDetails();
// console.log(result);
// console.log(person2.details());