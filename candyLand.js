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

var playerX = canvas.width/20 + 2*canvas.width/5;
var playerY = canvas.height-canvas.height/10;
var playerPos = 2;
var livesRemaining = 10;

var endOfGame = false;
var score = 0;
var scoring = false;

document.onkeyup = keyPress;
drawCanvas();
setCandyToFall();
document.getElementById("lives").innerText = "Lives: " + livesRemaining;
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
		
		if (candyHeight[fallingNum] + candyLength >= canvas.height - canvas.height/10 && candyHeight[fallingNum] + candyLength < canvas.height && playerPos == fallingNum) {
			score++;
			document.getElementById("score").innerText = "Current Score: " + score;
			setCandyToFall();
			
		}
		
		if(candyHeight[fallingNum] >= canvas.height){
			setCandyToFall();
			takeLife();
		}
		
		if (candyIsFalling[fallingNum]) {
			candyHeight[fallingNum] += candySpeed;
			drawCanvas();
			drawCandy();
		}
	}
}

function stopGame() {
	endOfGame = true;
	alert("End of Game, you got a score of " + score);
	highscore(score);
}

function takeLife() {
	livesRemaining--;
	document.getElementById("lives").innerText = "Lives: " + livesRemaining;
	
	if (livesRemaining == 0) {
		stopGame();
	}
}


function keyPress(e) {
	
	e = e || window.event;
	
	if (!endOfGame) {
		if(e.keyCode == 37) {
		
			if (playerX == canvas.width/20) {
				playerX = canvas.width*4/5 + canvas.width/20
				playerPos = 4;
			}
			else {
				playerX -= canvas.width/5;
				playerPos--;
			}
			
			drawCanvas();
		}
		else if (e.keyCode == 39) {
			
			if (playerX == canvas.width*4/5 + canvas.width/20) {
				playerX = canvas.width/20
				playerPos = 0;
			}
			else {
				playerX += canvas.width/5;
				playerPos++;
			}
			
			drawCanvas();
		}
		console.log(playerPos);
	}
	
}

function setCandyToFall() {
	
	if (candySpeed < 2){
		candySpeed += 0.01;
	}
	
	fallingNum = Math.floor(Math.random() * 5);
	candyIsFalling[fallingNum] = true;
	candyHeight = [0,0,0,0,0];
}

function drawCandy() {

	
	canvasContext.drawImage(candyImages[fallingNum], centerOfLane + (fallingNum * canvas.width/5), candyHeight[fallingNum], canvas.width/10, candyLength);
}

function drawCanvas() {
	canvasContext.beginPath();
	canvasContext.fillStyle = "#ff817a";
	canvasContext.rect(0, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "#b5ff7a";
	canvasContext.rect(canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "#7af8ff";
	canvasContext.rect(2*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "yellow";
	canvasContext.rect(3*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.beginPath();
	canvasContext.fillStyle = "#c37aff";
	canvasContext.rect(4*canvas.width/5, 0, canvas.width/5, canvas.height);
	canvasContext.fill();

	canvasContext.drawImage(basketImage, playerX, playerY, canvas.width/5 - canvas.width/10, canvas.height/10);
	
}
