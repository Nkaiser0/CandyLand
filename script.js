var canvas = document.getElementById("canvasID");
var canvasContext = canvas.getContext("2d");
var basketImage = document.getElementById("basketImage");
var candyImages = [document.getElementById("hersheyImage"), document.getElementById("snickersImage"), document.getElementById("twixImage"), document.getElementById("kitkatImage"), document.getElementById("reesesImage")];
var centerOfLane = canvas.width/20;
var candyHeight = [0,0,0,0,0];
var candyIsFalling = [false, false, false, false, false];
var fallingNum = 0;
var candyTimer = 0;
var time = 0;
var candySpeed = 1;
var candyInterval = 150;
var playerX = canvas.width/20;
var playerY = canvas.height-canvas.height/10;
var endOfGame = false;
var score = 0;

document.onkeyup = keyPress;
drawCanvas();


setInterval(function(){
	if (!endOfGame) {
		if(candyTimer % 100 == 0) {
			console.log(time);
			time++;
		}
		
		if(candyTimer ==0){
			setCandyToFall();
			candySpeed += 0.01;
			candyInterval -= 1;
		}
		
		if (candyIsFalling[fallingNum]) {
			candyHeight[fallingNum] += candySpeed;
			drawCanvas();
			drawCandy();
		}
		candyTimer++;
		candyTimer%=candyInterval;
	}
	
},10);

function stopGame() {
	endOfGame = true;
	alert("End of Game, you got a score of " + score);
	highscore(score);
}



function keyPress(e) {
	
	e = e || window.event;
	
	if(e.keyCode == 37 && playerX != canvas.width/20) {
		playerX -= canvas.width/5;
		drawCanvas();
	}
	else if (e.keyCode == 39 && playerX != canvas.width*4/5 + canvas.width/20) {
		playerX += canvas.width/5;
		drawCanvas();
	}
	
}

function setCandyToFall() {
	fallingNum = Math.floor(Math.random() * 5);
	candyIsFalling[fallingNum] = true;
	candyHeight = [0,0,0,0,0];
}

function drawCandy() {
	
	canvasContext.drawImage(candyImages[fallingNum], centerOfLane + (fallingNum * canvas.width/5), candyHeight[fallingNum], canvas.width/10, canvas.height/5);
}

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

	canvasContext.drawImage(basketImage, playerX, playerY, canvas.width/5 - 2*canvas.width/20, canvas.height/10);
	
}
