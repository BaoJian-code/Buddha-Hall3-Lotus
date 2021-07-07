let symmetry = 6; //amount of rotatation
let a = 0;
let num = 5;
let balls = [];
let photo;
let song,img;

function preload() {
	song = loadSound('buddha song.mp3');
	img = loadImage('buddha.png');
}


function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);
	song.loop();
	angleMode(DEGREES);
	colorMode(HSB, 255);
	imageMode(CENTER);
	image(img, width / 2, height / 2, 0, 800);
	// timer
	let counter = 0;
	let min = 0;
	noStroke();
	fill(255);
	textSize(20);
	text('Press s to save image',10,height-60 );
	text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 10, height - 20);

	function timeIt() {
		if (counter == 59) {
			min++;
			counter = 0;
		}
		counter++;
		fill(0);
		rect(100, height - 40, 200, 40);
		fill(255);
		textSize(20);
		text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 10, height - 20);
	}

	setInterval(timeIt, 1000);
	//
}

function draw() {


	let angle = 360 / symmetry;
	let mx = mouseX - width / 2;
	let my = mouseY - height / 2;
	let pmx = pmouseX - width / 2;
	let pmy = pmouseY - height / 2
	push();
	translate(width / 2, height / 2 + 80);
	for (let i = 0; i <= symmetry; i++) {

		push();
		rotate(angle * i);

		// // draw boundary of basic shape
		// stroke(255, 255, 255);
		// strokeWeight(1);
		// line(-width / 2, 0, width / 2, 0);
		// // push();
		// // rotate(angle/2);
		// // line(-width / 2, 0, width / 2, 0);
		// // pop();

		//Auto draw
		for (let b of balls) {
			b.update();
			b.draw();
			push();
			scale(-1, 1);

			b.draw();
			pop();
			if (b.isDead()) {
				balls.pop(b);
			}

		}

	
		pop();
	}
	pop();

	if (frameCount % 500 == 1) {
		fill(0);
		rect(width/4,0,width/2,height);
		image(img, width / 2, height / 2, 500, 800);

		for (i = 0; i <= 30; i++) {
			noStroke();
			fill(255, 255, 255, 255 - i * 10);
			ellipse(width / 2, height / 2 - 200, i);
		}

		for (i = 0; i <= num; i++) {
			let b = new Ball(random(0, 4.9));
			balls.push(b);
		}
	}
}




function keyTyped() {
	if (key === 's') {
		save('buddha light.jpg');
	}
}
