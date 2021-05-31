//Topic: Object creation by classess : this is the ECS6 feature
class Person {

	//Constructor function
	constructor(name, address, age) {
		this.name = name;
		this.address = address;
		this.age = age;
	}


	//creating new property details
	details(){
		return "Name : " + this.name + ", age : " + this.age;
	}

	// creating new property doSomething
	doSomething(){
		console.log("Doing Something...");
	}
}
// use of Constructor Function
let person1 = new Person("Anika", "Kanpur", 12);
console.log(person1.details());
let person2 = new Person("Manu", "Lucknow", 23);
console.log(person2.details());

console.log(person1.details == person2.details);

//class student extends person : 
class Student extends Person{

	constructor(name, address, age, id, college){
		super(name, address, age);
		this.id = id;
		this.college = college;
	}

	details(){
		return super.details() + " id : " + this.id + " college : " + this.college;
	}
}

let student = new Student("Rakesh", "Lucknow", 22, 1, "AMSs");
console.log(student.details());
