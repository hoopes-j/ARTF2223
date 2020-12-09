
var w = window.innerWidth;
var h = window.innerHeight;

window.addEventListener("resize", onResize);

function onResize() {
	w = window.innerWidth;
	h = window.innerHeight;
	resizeCanvas(w,h);
}

var canvas;
var slider;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('x=index', '-1');
	background(0);
	//slider = createSlider();
}

var xoff = 0;


function drawb() {
	background(0);
	b = map(mouseX,0,width,-2,2);
	a = map(mouseY, height, 0, 10, 1);
	calcGaus(b,a);

	/*
	background(0);
 	//rect(0,0,50,50);
 	strokeWeight(3);
 	translate(0,height);
 	 noFill();
  	stroke(255);
  	beginShape();
  	var span = 10;
  	iterator = map(mouseY,0,width,4,-4);
  
 	 for (var i = 0; i < span; i += .001) {
  		let y = noise(i,xoff);
  		y = map(y,0,1,0,-height/2);
  		x = map(i,0,span,0,width);
  		vertex(x,y * iterator);
 	 }
  
  	endShape();
  	xoff += .011;
  	if (iterator < 1) {
  	iterator += .05;
 	}
 	*/
} 


function draw() {

  b = map(mouseX,0,width,-2,2);
  a = map(mouseY, height, 0, 10, 1);


  
  background(0);
  //rect(0,0,50,50);
  strokeWeight(3);
  translate(0,height);
  noFill();
  stroke(255);
  beginShape();
  var span = 10;
  iterator = map(mouseY,0,width,1.5,0);
  
  
  for (var i = 0; i < span; i += .01) {
  	let y = noise(i,xoff);
  	y = map(y,0,1,0,-height/2);
  	x = map(i,0,span,0,width);
  	//g = gaussian(map(i,0,span,-2,2),b,a);
  	//y = y + map(g,1,0,0,height);

  	vertex(x,y * iterator);
  }
  
  endShape();
  xoff += .011;
  if (iterator < 1) {
  iterator += .05;
  }
} 


function gaussian(x,b,a) {
	y = (1/(Math.sqrt(a) * Math.sqrt(TWO_PI))) * Math.exp(((-1 * Math.pow(x-b,2)) / (2 * a)));
	return y;
}

function calcGaus(b,a) {
	stroke(255);
	strokeWeight(5);
	beginShape();
	noFill();
	for (let i = -2; i < 2; i += .1) {
		y = gaussian(i,b,a);
		vertex(map(i,-2,2,0,width),map(y,1,0,0,height));
		console.log(gaussian(5,b));
	}
	endShape();
} 