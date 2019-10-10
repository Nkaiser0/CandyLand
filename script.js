var canvas = document.getElementById("canvasID");
var canvasContext = canvas.getContext("2d");
var basketImage = document.getElementById("basketImage");
var candyImages = [document.getElementById("hersheyImage"), document.getElementById("snickersImage"), document.getElementById("twixImage"), document.getElementById("kitkatImage"), document.getElementById("reesesImage")];
var centerOfLane = canvas.width/20;


var time = 0;
var timeRemaining = 200;

var candySpeed = 1.5;
var candyInterval = 100;
var candyTimer = 0;
var candyHeight = [0,0,0,0,0];
var candyLength = canvas.height/5;
var candyIsFalling = [false, false, false, false, false];
var fallingNum = 0;

var playerX = canvas.width/20;
var playerY = canvas.height-canvas.height/10;
var playerPos = 0;

var endOfGame = false;
var score = 0;

document.onkeyup = keyPress;
drawCanvas();
setCandyToFall();
document.getElementById("timer").innerText = "Time: " + timeRemaining;


setInterval(runGame,10);

function runGame(){
	if (!endOfGame) {
		time++;
		time%=100;
		
		if(time == 0) {
			timeRemaining--;
			document.getElementById("timer").innerText = "Time: " + timeRemaining;
			
			if (timeRemaining == 0) {
				stopGame();
			}
			
		}
		if(candyHeight[fallingNum] >= canvas.height){
			setCandyToFall();
			console.log(candySpeed);
			if (candySpeed < 2){
				candySpeed += 0.01;
			}
		}
		
		if (candyIsFalling[fallingNum]) {
			candyHeight[fallingNum] += candySpeed;
			drawCanvas();
			drawCandy();
		}
	}
	else{
		
	}
}

function stopGame() {
	endOfGame = true;
	alert("End of Game, you got a score of " + score);
	highscore(score);
}



function keyPress(e) {
	
	e = e || window.event;
	
	if(e.keyCode == 37 && playerX != canvas.width/20) {
		playerX -= canvas.width/5;
		playerPos--;
		drawCanvas();
	}
	else if (e.keyCode == 39 && playerX != canvas.width*4/5 + canvas.width/20) {
		playerX += canvas.width/5;
		playerPos++;
		drawCanvas();
	}
	console.log(playerPos);
	
}

function setCandyToFall() {
	
	
	fallingNum = Math.floor(Math.random() * 5);
	candyIsFalling[fallingNum] = true;
	candyHeight = [0,0,0,0,0];
}

function drawCandy() {

	
	canvasContext.drawImage(candyImages[fallingNum], centerOfLane + (fallingNum * canvas.width/5), candyHeight[fallingNum], canvas.width/10, candyLength);
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

	canvasContext.drawImage(basketImage, playerX, playerY, canvas.width/5 - canvas.width/10, canvas.height/10);
	
}
