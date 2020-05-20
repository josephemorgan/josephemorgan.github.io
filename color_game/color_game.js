let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#picked-color")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy_button");
let hardButton = document.querySelector("#hard_button");

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i] ) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
});

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    };
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
    }
    this.textContent = "New Colors";
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            for (let i = 0; i < squares.length; ++i) {
                squares[i].style.backgroundColor = pickedColor;
            }
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    let numberArray = [];

    for (let i = 0; i < num; ++i) {
        numberArray.push(getRandomColor());
    }

    return numberArray;
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}