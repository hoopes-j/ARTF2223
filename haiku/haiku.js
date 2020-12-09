
var width = window.innerWidth;
var height = window.innerHeight;

var state = 1;
var top1 = height * .4;
var left1 = width * .05;
var top2 = height * .1;
var left2 = width * .7;
var top3 = height * .5;
var left3 = width * .6;


//return lists of body elements
body1 = document.getElementsByClassName("body1");
body2 = document.getElementsByClassName("body2");
body3 = document.getElementsByClassName("body3");

//retrieve word elements
var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");
var word3 = document.getElementById("word3");


//retrieve haiku elements
var haiku1 = document.getElementById("haiku1");
var haiku2 = document.getElementById("haiku2");
var haiku3 = document.getElementById("haiku3");


function display1() {
	var haiku1 = document.getElementById("haiku1");
	var haiku2 = document.getElementById("haiku2");
	var haiku3 = document.getElementById("haiku3");
	haiku1.style.display = 'block';
	haiku2.style.display = 'none';
	haiku3.style.display = 'none';
}

function display2() {
	var haiku1 = document.getElementById("haiku1");
	var haiku2 = document.getElementById("haiku2");
	var haiku3 = document.getElementById("haiku3");
	haiku1.style.display = 'none';
	haiku2.style.display = 'block';
	haiku3.style.display = 'none';
}

function display3() {
	var haiku1 = document.getElementById("haiku1");
	var haiku2 = document.getElementById("haiku2");
	var haiku3 = document.getElementById("haiku3");
	haiku1.style.display = 'none';
	haiku2.style.display = 'none';
	haiku3.style.display = 'block';
}


function animateMusicPos() {
	let start = [0,36];
	let finish = [83,36];
	var word1 = document.getElementById("word1");
	word1.style.position = 'absolute';
	word1.style.left = start[0];
	word1.style.top = start[1];
	var x = start[0];
	var y = start[1];
	var xrate = (finish[0] - x) / 20;
	var yrate = (finish[1] - y) / 20;
	var it = setInterval(frame, 50)
	var i = 0;
	function frame() {
		if (i >= 20) {
			clearInterval(it);
			
		}
		else {
			i++;
			x += xrate;
			y += yrate;
			word1.style.top = y.toString() + 'px';
			word1.style.left = x.toString() + 'px';	
			}
	}
	animate1();
}


function animateSoundPos1() {
	let start = [24,36];
	let finish = [88,36];
	var word1 = document.getElementById("word2-1");
	word1.style.position = 'absolute';
	word1.style.left = start[0];
	word1.style.top = start[1];
	var x = start[0];
	var y = start[1];
	var xrate = (finish[0] - x) / 20;
	var yrate = (finish[1] - y) / 20;
	var it = setInterval(frame, 50)
	var i = 0;
	function frame() {
		if (i >= 20) {
			clearInterval(it);
			
		}
		else {
			i++;
			x += xrate;
			y += yrate;
			word1.style.top = y.toString() + 'px';
			word1.style.left = x.toString() + 'px';	
			}
	}
	
}

function animateSoundPos2() {
	let start = [27,18];
	let finish = [88,36];
	var word1 = document.getElementById("word2-2");
	word1.style.position = 'absolute';
	word1.style.left = start[0];
	word1.style.top = start[1];
	var x = start[0];
	var y = start[1];
	var xrate = (finish[0] - x) / 20;
	var yrate = (finish[1] - y) / 20;
	var it = setInterval(frame, 50)
	var i = 0;
	function frame() {
		if (i >= 20) {
			clearInterval(it);
			
		}
		else {
			i++;
			x += xrate;
			y += yrate;
			word1.style.top = y.toString() + 'px';
			word1.style.left = x.toString() + 'px';	
			}
	}
	animate2();
}

function animateMusicStyle() {
	var word1 = document.getElementById("word1");

	font
	let i = 0;
	function frame() {
		if (i >= 20) {

		}
	}
}



function animate1() {
	var e = document.getElementById("haikuContainer1");
	let x = 5;
	let y = 40;
	let finalx = 70;
	let finaly = 10;
	let xrate = (finalx - x) / 100;
	let yrate = (finaly - y) / 100;
	var it = setInterval(frame, 25);
	let i = 0;
	function frame() {
		if (i >= 100) {
			clearInterval(it);
			fadeInHaiku1("haiku2");
		}
		else {
			i++;
			x += xrate;
			y += yrate;
			e.style.top = y.toString() + '%';
			e.style.left = x.toString() + '%';	
			}
	}
}

function animate2() {
	var start = [70,10];
	var finish = [60,50];
	var e = document.getElementById("haikuContainer2");
	let x = start[0];
	let y = start[1];
	let finalx = finish[0];
	let finaly = finish[1];
	let xrate = (finalx - x) / 100;
	let yrate = (finaly - y) / 100;
	var it = setInterval(frame, 10)
	let i = 0;
	function frame() {
		if (i >= 100) {
			clearInterval(it);
			fadeInHaiku2("haiku3");
		}
		else {
			i++;
			x += xrate;
			y += yrate;
			e.style.top = y.toString() + '%';
			e.style.left = x.toString() + '%';	
			}
	}
}

function fadeInHaiku1(name) {
	var int = setInterval(frame, 10);
	var haiku = document.getElementById(name);
	var word = document.getElementById("word1");
	haiku.style.display = "block";
	var b = 0.0;
	function frame() {
		if (b == 100.0){
			clearInterval(int);
			word.style.display = 'none';
		}
		else {
			b = b + 1.0;
			c = b / 100.0;
			haiku.style.opacity = c;
		}
	}
}

function fadeInHaiku2(name) {
	var int = setInterval(frame, 10);
	var haiku = document.getElementById(name);
	var word = document.getElementById("word2-1");
	var word2 = document.getElementById("word2-2");
	haiku.style.display = "block";
	var b = 0.0;
	function frame() {
		if (b == 100.0){
			clearInterval(int);
			word.style.display = 'none';
			word2.style.display = 'none';
		}
		else {
			b = b + 1.0;
			c = b / 100.0;
			haiku.style.opacity = c;
		}
	}
}


function fadeOut1(name) {
	var int = setInterval(frame, 10);
	var elements = document.getElementsByClassName(name);
	var b = 100.0;
	function frame() {
		if (b == 0.0){
			clearInterval(int);
			animateMusicPos();
		}
		else {
			b = b - 1.0;
			c = b / 100.0;
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.opacity = c;
			}
		}
	}
	
}

function fadeOut2(name) {
	var int = setInterval(frame, 10);
	var elements = document.getElementsByClassName(name);
	var b = 100.0;
	function frame() {
		if (b == 0.0){
			clearInterval(int);
			animateSoundPos1();
			animateSoundPos2();
		}
		else {
			b = b - 1.0;
			c = b / 100.0;
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.opacity = c;
			}
		}
	}
	
}


function fadecolor1() {
	console.log('hello');
	var word = document.getElementById("word1");
	var int = setInterval(frame, 10)
	var g = 50;
	var b = 50;
	var finalg = 255;
	var finalb = 255;
	var grate = (finalg-g) / 100;
	var brate = (finalb-b) / 100;
	function frame() {
		if (b >= 255 || g >= 255){
			clearInterval(int);
		}
		else {
			word.style.color = 'rgba(255,' + g + ',' + b +',1)';
			b += brate;
			g += grate;
		}
	}

}