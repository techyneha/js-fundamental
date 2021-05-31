// function
let printDetailsWithArg = function(personObj){
		console.log("---------- Function with Args--------");
		console.log(personObj.name);
		console.log(personObj.age);
		console.log(personObj.address);
	};

printDetailsWithArg({name: "Neha", age: 26, address: "Lucknow"});

//function
let printDetailsWithThis = function(){
		console.log("---------- Function with this--------");
		console.log(this.name);
		console.log(this.age);
		console.log(this.address);
	};

//personObj.printDetailsWithThis();

// printDetailsWithThis
console.dir(printDetailsWithThis);


//personObj.printDetailsWithThis();
printDetailsWithThis.call({name: "Neha", age: 26, address: "Lucknow"});

// concatinate in js by +
let person = {

	name:"Montu",
	age: 28,
	address: "Lucknow",
	getDetails: function(){
		return this.name + "_" + this.address + "_" + this.age;
	}
};

let details = person.getDetails();
console.log(details);