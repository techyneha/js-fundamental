
//Printing any value on console

//Topic : assign value in variable so that reuse later
let mango = 30
//console.log(mango)

let mangoes = mango + 10
//console.log(mangoes)

//1. related values
//name: Neha, age:27, address:Lucknow,name: Sneha, age:23, address:Delhi, name: Manu, age:37, address:noida,


//Name 	Address 	Age
//Neha	Lucknow		27
//Sneha	Delhi		23
//Manu	noida 		37

//literal object representation
let person1 = {
	name : "Neha",
	address: "Lucknow",
	age: 27
};

let person2 = {
	name : "Sneha",
	address: "Delhi",
	age: 27
};

//2.list of values as a single ameValue - arrays
let shoppingList = ["Pen", "Book", "Bottle", "Home"];
console.log(shoppingList);
console.log(shopitem.length);

//3.: representing nothing
let nothing = undefined;
let haveTv = null;

//4.: Condition
let someValue = false;
if(someValue){
	console.log("Do this");
}else{
	console.log("Do that");
}


//5.:representing set of statements as a single nameVlaue(Lazy)

//function definition
function doSomething() {
	console.log("I am good.");
	console.log("I am going to delhi");
	console.log("ready for coding");
}
//function execution
doSomething();
doSomething();













