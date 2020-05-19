$(document).ready(function() {
	$(".canvas-button").click(function(){
		var pageId = $(this).attr("data-page");
		$("html, body").animate({ scrollTop: $("#"+pageId).offset().top },1500);
	  }) 
	  
	$(".icob").click(function(){
		console.log("clicked");
		$(".link-toggle").toggleClass("active");
	}) 
});


var canvas = document.querySelector('canvas')
canvas.width = window.document.body.clientWidth;
canvas.height = 500;

console.log(canvas);

var c = canvas.getContext("2d");


var mouse = {
	x: undefined,
	y: undefined
}


var maxRadius = 40;
var minRadius = 3;

var colorArray = [
	'#1455D9',
	'#BF1736',
	'#0E2773',
	'#1438A6',
	'#0D1440'
];

window.addEventListener('mousemove' , (event) => {
	mouse.x = event.x;
	mouse.y = event.y;

})
window.addEventListener('resize', () => {
    canvas.width = window.document.body.clientWidth;
    canvas.height = 500;
})
function circle(x,y,dx,dy,radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	this.minRadius = radius;
	
	//draw
	this.draw = function() {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();
	}

	// update x and y position
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
	var radius = Math.random()*2 + 1;

	circleArray.push(new circle(x,y,dx,dy,radius));

}

// var circle =  new circle(200,200,3,3,30);

function animate() {
	
	c.clearRect(0,0,innerWidth,innerHeight);
	
	requestAnimationFrame(animate);
	c.fillStyle = "#0D1440";
	c.fillRect(0, 0, canvas.width, canvas.height);
	// circle.update();
	// c.font = "30px Arial";
	// c.fillText("Hello I am yatharth verma", 10, 50);
	for(var i = 0;i < circleArray.length ;i++){
		circleArray[i].update();
	}	
}

animate();