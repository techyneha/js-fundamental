//Topic: Fun with function part 1

//Functions = mechanism = how to do a task

// process to grow tomatoes in gerden
function growTomatoes() {
	console.log('1.Throughly moisten the seed starting mix.');
	console.log('2.Fill the containers to within 1/2 of the top');
	console.log('3.Water to ensure good seed-to-mix contact');
	console.log('4.Place the pots in a warm spot or on top of the heat mat');
	console.log('5.Keep the mix moist but not soaking wet');
}

let person = {
	name: "Naina",
	address: "Lucknow",
	doTask: function(task){
		console.log('Analyse Task');
		console.log('Gethering of required resource');
		task();
		console.log('Task Complete');
	}
};

person.doTask(growTomatoes);

let person2 = {
	name: "Manu",
	address: "Delhi",
	doTask: function(task){
		console.log('Analyse the task');
		console.log('REquirement analysis and resource gethering');
		console.log('Analyse task requirement');
		task();
		console.log('complete the task');
	}
};

person2.doTask(growTomatoes);