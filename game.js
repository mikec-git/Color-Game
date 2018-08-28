var colors = generateRandomColors(6);
var pickedColor = pickRandomColor(colors);

var header = document.querySelector("#headerBar");
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");

for(var i = 0; i < squares.length; i++){
    // Initial Colors
    squares[i].style.backgroundColor = colors[i];

    // Click listeners
    squares[i].addEventListener("click", squareClicked);
};

function squareClicked(){
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
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

function pickRandomColor(colorArr){
    var random = Math.floor(Math.random() * colorArr.length + 1);
    return colorArr[random];
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

rgbDisplay.textContent = pickedColor;