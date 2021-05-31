// Topic : More about array objects

// This call will be used to create objects of students

class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = marks;
	}
}

// This function creates a list of students
function createDummyStudents(){
	let students = [];
	students.push(new Student('Tanu',86));
	students.push(new Student('Aman',78));
	students.push(new Student('Naman',28));
	students.push(new Student('Raman',88));
	students.push(new Student('Manu',58));
	// without using class -> object literal notation
	students.push({ name: "Mohit", marks: 55});
	return students;
}

let students = createDummyStudents();
console.log(students);

//Problem
//1. Find the student whose name === Raman
function isName(student){
	console.log("Function called...");
	return student.name === "Raman";
}

let foundObj = students.find(isName);

// console.log(foundObj);

let  objFoundAt = students.findIndex(isName);
// console.log(objFoundAt);

// 2. Filter all the students whose marks > 70

function marksGt70(student){
	return student.marks > 70;
}

// this function returns a new array a new array based on ffilter
let newstudentsGt70 = students.filter(marksGt70);
console.log('List below is of students with above 70 marks');
console.log(newstudentsGt70);


// 3. add two to marks who has marks 80

let studentsMarksGt80 = students.filter(function(student){
	return student.marks > 80;
});
console.log('Above 80 marks List is below..');
console.log(studentsMarksGt80);

//This functio must return an object
function add2(student){
	student.marks = student.marks + 2;
	return student;
}

let newArrayWith2MoreMarks = studentsMarksGt80.map(add2);
console.log('Add 2 more in above 80 marks');
console.log(newArrayWith2MoreMarks);

// new way to write above code
let resultantStudents = students
.filter(function(){
	return student.marks > 75;
})
.map(function(){
	student.marks += 2;
	return student;
});

console.log(resultantStudents);