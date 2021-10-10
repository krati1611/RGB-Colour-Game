var numSquares = 6; 
var colors = [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numSquares = 3: numSquares=6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i=0; i<squares.length; i++){
	//add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare clolor to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColor(clickedColor);
				h1.style.backgroundColor= clickedColor;
				resetButton.textContent = "Play Again"
			}else{
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from arrray
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Color"
	messageDisplay.textContent = "";
	//change color of square   
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}	
	}
	h1.style.backgroundColor= "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});


function changeColor(color){
	//loop through through all squares
	for (var i=0; i<squares.length; i++){
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
} 

function generateRandomColors(num){
	//make array
	var arr = [];
	//repeat num type
	for (var i=0; i<num; i++){
		//get random colors and push to array
		arr.push(randomColor())
	}
	
	//return that array
	return arr;
} 

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a "red" from 0 - 255
	var g = Math.floor(Math.random()*256);
	//pick a "red" from 0 - 255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}