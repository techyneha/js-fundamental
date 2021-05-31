
//console.dir(document); //document is default object an represent whole html page detail

//console.dir(document.body);

//console.dir(document.head);


function doSomething(){
	console.log("Started doing....");
	//alert("Hello Button Clicked..");
}

// function againDoSomething(){
// 	console.log("Started Doing something else");
// }

function createElement(){
	let pObj = document.createElement("p");
	pObj.textContent = "This is  paragraph";
	let container = document.querySelector(".container");
	container.appendChild(pObj);
	pObj.style.color = "red";
	pObj.style.fontsize = "1.5rem";
	pObj.style.background = "yellow";
	pObj.style.padding = "16px";
}

// 				CSS Selector 	
let btnobj = document.querySelector("#clickMe");
// console.log(btnobj);
console.dir(btnobj);

// btnobj.onclick = doSomething;
// btnobj.addEventListener("click", doSomething);
//btnobj.addEventListener("click",againDoSomething);
btnobj.addEventListener("click", createElement);