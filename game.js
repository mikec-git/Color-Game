var colors      = generateRandomColors(6);
var pickedColor = pickRandomColor(colors);

var resetButton = document.querySelector("#reset");
var header      = document.querySelector("#headerBar");
var squares     = document.querySelectorAll(".square");
var rgbDisplay  = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");

rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", squareClicked);
};

resetButton.addEventListener("click", restart);

function restart(){
    colors = generateRandomColors(6);
    pickedColor = pickRandomColor(colors);

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", squareClicked);
    };

    rgbDisplay.textContent = pickedColor;
    header.style.backgroundColor    = "#232323";
    resetButton.textContent         = "New Colors";
};

function squareClicked(){
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
        messageDisplay.textContent  = "Correct!";
        resetButton.textContent     = "Play Again?";
        allSameColor(pickedColor);
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
    }
};

function allSameColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;

        if(squares[i].style.backgroundColor === color)   continue;
    }    
    header.style.backgroundColor = pickedColor;
};

function pickRandomColor(){
    var random = Math.floor(Math.random() * colors.length + 1);
    return colors[random];
};

function generateRandomColors(num){
    var array = [];

    for(var i = 0; i < num; i++){
        array.push(randomColor());
    }
    return array;
};

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};