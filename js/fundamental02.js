//1. related values
//name: Neha, age:27, address:Lucknow,name: Sneha, age:23, address:Delhi, name: Manu, age:37, address:noida,


//Name 	Address 	Age
//Neha	Lucknow		27
//Sneha	Delhi		23
//Manu	noida 		37

// literal object representation
let person1 = { 
name : "sushil",
age : "23",
address : "lucknow",
persondetails: function(){
	console.log("----------Printing Person Details--------");
	console.log(person1.name);
	console.log(person1.age);
	console.log(person1['address']);
	}
};


let person2 = { 
name : "rakesh",
age : "23",
address : "lucknow",
persondetails: function(){
	console.log("----------Printing Person Details--------");
	console.log(person2.name);
	console.log(person2.age);
	console.log(person2['address']);
	}
};

// empty object
let person3 = {};
person3.name = "mohit";
person3.age = "23";
person3.address = "lucknow";
person3.persondetails = function(){
	console.log("----------Printing Person Details--------");
	console.log(person3.name);
	console.log(person3.age);
	console.log(person3['address']);
	};

let person4 = {};
person4['name'] = "ronit";
person4['age'] = "23";
person4['address'] = "lucknow";
person4['persondetails'] = function(){
	console.log("----------Printing Person Details--------");
	console.log(person4.name);
	console.log(person4.age);
	console.log(person4['address']);
	};

//array -------	0		 1		  2		   3
let register = [person1, person2, person3, person4];

//console.log(register);
 //console.log(register[0]);
// console.log(register[1]);
// console.log(register.length);

// funtions == verbs
// function persondetails(personObj){
// 	console.log("----------Printing Person Details--------");
// 	console.log(personObj.name);
// 	console.log(personObj.age);
// 	console.log(personObj['address']);
// }

// functions are used for code reuse
// persondetails(person1);
// persondetails(person3);
// persondetails(person4);
person4.persondetails();


//first add two numbers then square the result
// function addAndSquare(number1, number2) {
// 	console.log("invoking function");
// 	let result = number1 + number2;
// 	let squareOfResult = result * result;
// 	return squareOfResult;
// }

//or 
let addAndSquare = function(number1, number2) {
	console.log("invoking function");
	let result = number1 + number2;
	let squareOfResult = result * result;
	return squareOfResult;
};

//invoking function
let result = addAndSquare(3, 4);
// let result;
console.log(result);

// function ---> takes input -----> return a single value

//javascript functio are first class citizen