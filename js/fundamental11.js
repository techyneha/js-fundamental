//Topic: Fun with function part 2

let student1 = {
	name: "Manu",
	marks: 89
};

let student2 = {
	name: "Tanu",
	marks: 58
};

// hiring orgnization

//mechanism to test eligibility of any student
function isEligible(student){
	//assured student is not eligible
	let flag = false;
	console.log(student.marks);
	if(student.marks > 60){
		flag = true;
	}
	return flag;
}

// mechanism to take interview
function interview(student, eligibilityTestingMechanism){
	let isEligible = eligibilityTestingMechanism(student);
	console.log(isEligible);
	if(isEligible === true){
		console.log('Eligible for interview');
	}else{
		console.log('Not eligible for interview');
	}
}

let isQualified = interview(student1, isEligible);
console.log(isQualified);

isQualified = interview(student2, isEligible);

function calculate(number1, number2, operationFn){
	let result = operationFn(number1, number2);
	return result;
}

let sumOperation = function(number1, number2) {
	return number1 + number2;
};

console.log(calculate(5,2,sumOperation));

let result2 = calculate(40,10, function(number1, number2){
	return number1*number2;
});

console.log(result2);