var canvas = document.getElementById("canvasID");

var canvasContext = canvas.getContext("2d");
canvasContext.beginPath();
canvasContext.rect(20, 20, 150, 100);
canvasContext.stroke();