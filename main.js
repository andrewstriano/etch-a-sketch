const gameContainer = document.querySelector("#game-container");
const resetButton = document.querySelector("#reset-button");
let height = 16;
let width = 16;
let numBox = height * width;
function buildGrid(height, width) { // builds the grid based on two parameters (height and width).
    for (let i = 1; i < ((height * width)+1); i++) {
        const div = document.createElement("div");
        div.style.cssText = "border: 1px solid black;";
        gameContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        gameContainer.appendChild(div);
        div.classList.add("grid-items");
        addListener();
    };    
};
buildGrid(height, width); // builds initial grid

function addListener () { // adds the event listener to each grid item
    let divs = document.querySelectorAll(".grid-items");
    for (let i=0;i<divs.length;i++) {
        divs[i].addEventListener("mouseover", function randomColor () { // this is the function that picks the random color to assign to the grid items.
            let color;
            switch (Math.floor(Math.random()*5)+1){
                case(1): color = "red";
                break;
                case(2): color = "blue";
                break;
                case(3): color = "green";
                break;
                case(4): color = "yellow";
                break
                case(5): color = "pink";
                break
            }
            divs[i].style.backgroundColor = color
        }) 
    }
};

// function randomColor () {
//     let color;
//     switch (Math.floor(Math.random()*5)+1){
//         case(1):{color = "red";}
//         case(2): {color = "blue";}
//         case(3): {color = "green";}
//     }
//     divs[i].style.backgroundColor = color
// }

function reset() { // reset function to replace grid with user defined new one
    height = prompt("Enter desired height");
    width = prompt("Enter desired width");
    numBox = height * width;
    if (numBox > 900 ) {
        alert("ERROR: Make sure dimensions are less than 30 x 30")
    } else {
    gameContainer.replaceChildren();
    buildGrid(height, width);
    addListener(height);
    }
};

resetButton.addEventListener("click", reset);





