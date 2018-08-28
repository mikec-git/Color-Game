var numSquares = 6;
var colors      = generateRandomColors(numSquares);
var pickedColor = pickRandomColor(colors);

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else if(this.textContent === "Hard"){
            numSquares = 6;
        }
        
        reset();
    });
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

var header      = document.querySelector("div#headerBar h1");
var squares     = document.querySelectorAll(".square");
var rgbDisplay  = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");

resetButton.addEventListener("click", function(){
    reset();
});

rgbDisplay.textContent = pickedColor;

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