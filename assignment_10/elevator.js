
function infoPage() {
	location.href = "info.html";
}

function openDoor() {
	var dr = document.getElementById("doorRight");
	var dl = document.getElementById("doorLeft");
	var pos = 222;
	var int = setInterval(frame, 2);
	function frame() {
		if (pos == 394) {
			clearInterval(int);
		}
		else {
			pos++;
			dr.style.left = pos + "px";
			dr.style.width = 394 - pos + "px";
			dl.style.width = 394 - pos + "px";
		}
	}
}

function closeDoor() {
	var dr = document.getElementById("doorRight");
	var dl = document.getElementById("doorLeft");
	var pos = 394;
	var int = setInterval(frame, 2);
	function frame() {
		if (pos == 221) {
			clearInterval(int);
		}
		else {
			pos--;
			dr.style.left = pos + "px";
			dr.style.width = 394 - pos + "px";
			dl.style.width = 394 - pos + "px";
		}
	}
}


function moveUp() {
	
	var box = document.getElementById("cabin");
	var pos = 800;
	var int = setInterval(frame,1);
	function frame() {
		if (pos == 53) {
			clearInterval(int);
		}
		else {
			pos--;
			box.style.top =  pos + "px";
		}
	}
}

function moveDown() {
	var box = document.getElementById("cabin");
	var pos = -500;
	var int = setInterval(frame,1);
	function frame() {
		if (pos == 53) {
			clearInterval(int);
		}
		else {
			pos++;
			box.style.top =  pos + "px";
		}
	}
}

function buttonHover(element) {
	var elm = document.getElementById(element);
	if (elm.style.backgroundColor == "yellow") {
		elm.style.backgroundColor = "grey"; 
	}
	else {
		elm.style.backgroundColor = "yellow";
	}
}

function fontHover(element) {
	var elm = document.getElementById(element);
	if (elm.style.color == "yellow") {
		elm.style.color = "black"; 
	}
	else {
		elm.style.color = "yellow";
	}
}

















