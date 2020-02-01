var canvas = document.querySelector('canvas');


console.log(canvas);

var c = canvas.getContext("2d");


var mouse = {
	x: undefined,
	y: undefined
}


var maxRadius = 40;
var minRadius = 3;

var colorArray = [
	'#F205CB',
	'#7C05F2',
	'#6204BF',
	'#050259',
	'#F23827'
];

window.addEventListener('mousemove' , (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);

})

function circle(x,y,dx,dy,radius) {
	
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	this.minRadius = radius;
	this.draw = function() {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if((this.x + this.radius) > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if((this.y + this.radius) > innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// interactivity

		if(mouse.x - this.x < 50 && mouse.x - this.x >-50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
			if(this.radius < maxRadius){
				this.radius += 1;
			}
		}else if(this.radius > this.minRadius){
			this.radius -= 1;
		}

		this.draw();
	}
}


var circleArray = []




for(var i = 0;i < 800;i++){
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var radius = Math.random()*3 + 1;

	circleArray.push(new circle(x,y,dx,dy,radius));

}

var circle =  new circle(200,200,3,3,30);
function animate() {
	c.clearRect(0,0,innerWidth,innerHeight);
	requestAnimationFrame(animate);

	circle.update();
	// c.font = "30px Arial";
	// c.fillText("Hello I am yatharth verma", 10, 50);
	for(var i = 0;i < circleArray.length ;i++){
		circleArray[i].update();
	}	
}

animate();