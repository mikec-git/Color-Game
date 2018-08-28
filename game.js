var numSquares = 9;
var colors      = [];
var pickedColor = null;

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var header      = document.querySelector("div#headerBar h1");
var squares     = document.querySelectorAll(".square");
var rgbDisplay  = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");

init();

function init(){
    setupModebuttons();
    setupSquares();
    reset();
}

function setupModebuttons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Medium"){
                numSquares = 6;
            }
            else if(this.textContent === "Hard"){
                numSquares = 9;
            }            
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
        
            if(clickedColor === pickedColor){
                messageDisplay.textContent  = "Correct!";
                resetButton.textContent     = "Play Again?";
                allSameColor(clickedColor);
                header.style.background = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    
    rgbDisplay.textContent          = pickedColor;
    header.style.backgroundColor    = "steelblue";
    resetButton.textContent         = "New Colors";
    messageDisplay.textContent      = "";
    
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]; 
            squares[i].style.display = "block";           
        }
        else{
            squares[i].style.display = "none";
        }
    };    
}

resetButton.addEventListener("click", reset);

function allSameColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }    
}

function pickRandomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var array = [];

    for(var i = 0; i < num; i++){
        array.push(randomColor());
    }

    return array;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}