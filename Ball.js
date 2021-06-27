class Ball {
	constructor(r) {
		colorMode(HSB, 255);


		this.r = r;
		this.rv = -0.005
		this.pos = createVector(0, 0);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.t = 0;

		fill(255, 0, 255, 125);

	}

	update() {

		this.r += this.rv;
		if (this.r <= -5 || this.r >= 5) {
			this.rv *= -1;
		}
		this.t = this.t + 0.01;
		this.acc = p5.Vector.random2D();
		this.acc.mult(0.01);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	draw() {


		noStroke();
		ellipse(this.pos.x, this.pos.y, this.r);
	}

	isDead() {
		if (this.pos.x < -height / 4 || this.pos.x > height / 4 || this.pos.y < -height / 4 || this.pos.y > height / 4) {
			return true;
		} else {
			return false;
		}

	}
}