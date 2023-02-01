const gameContainer = document.querySelector("#game-container");
const resetButton = document.querySelector("#reset-button");
let height = 16;
let width = 16;
function buildGrid(height, width) { // builds the grid based on two parameters (height and width).
    for (let i = 1; i < ((height * width)+1); i++) {
        const div = document.createElement("div");
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;";
        gameContainer.appendChild(div);
        div.classList.add("grid-items");
    };    
};
buildGrid(height, width); // builds initial grid

let divs = document.querySelectorAll(".grid-items");
for (let i=0;i<divs.length;i++) {
    divs[i].addEventListener("mouseover", function changeColor() {
        divs[i].classList.add("change-color");
    }) 
}
function reset() { // reset function to replace grid with user defined new one
    height = prompt("Enter desired height");
    width = prompt("Enter desired width");
    gameContainer.replaceChildren();
    buildGrid(height, width);
    gameContainer.style.width = width
}


resetButton.addEventListener("click", reset);





