var canvas = document.getElementById("canvasID");
var canvasContext = canvas.getContext("2d");

var playerX = 0;
var playerY = canvas.height-canvas.height/10;
drawCanvas();

function drawCanvas() {
	canvasContext.beginPath();
	canvasContext.fillStyle = "red";
	canvasContext.rect(0, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "green";
	canvasContext.rect(canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "blue";
	canvasContext.rect(2*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "yellow";
	canvasContext.rect(3*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "purple";
	canvasContext.rect(4*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "black";
	canvasContext.rect(playerX, playerY, canvas.width/5, canvas.height/10);
	canvasContext.fill();
}

document.onkeyup = keyPress;

function keyPress(e) {
	
	e = e || window.event;
	
	if(e.keyCode == 37 && playerX != 0) {
		playerX -= canvas.width/5;
		drawCanvas();
	}
	else if (e.keyCode == 39 && playerX != canvas.width*4/5) {
		playerX += canvas.width/5;
		drawCanvas();
	}
	
}