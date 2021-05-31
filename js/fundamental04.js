// function
let printDetails = function(){
		console.log("---------- Person Details--------");
		console.log(this.name);
		console.log(this.age);
		console.log(this['address']);
	};

//printDetails();
//printDetails.myproperty = "My Properties";
console.dir(printDetails);

// Person object creator function = constructor
function PersonConstructor(name, age, address){
	let personObj = {};
	personObj.name = name;
	personObj.age = age;
	personObj.address = address;
	personObj.printDetails = printDetails;
}

console.dir(PersonConstructor);

let person1 = PersonConstructor("Neha", 26, "Lucknow");
console.dir(person1);

//person1.printDetails();