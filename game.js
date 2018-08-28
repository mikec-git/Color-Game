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


    });
}

function reset(){
    
}

var header      = document.querySelector("div#headerBar h1");
var squares     = document.querySelectorAll(".square");
var rgbDisplay  = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");

// easyButton.addEventListener("click", function(){
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickRandomColor();
//     rgbDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickRandomColor();
//     rgbDisplay.textContent = pickedColor;
    
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    rgbDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    
    messageDisplay.textContent      = "";
    header.style.backgroundColor    = "steelblue";
    resetButton.textContent         = "New Colors";
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