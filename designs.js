// Define the canvas
const grid = document.getElementById("pixelCanvas");
// Define the submit size button
const submitSize = document.getElementById("sizePicker");
// Call makeGrid() following submit
submitSize.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

//Adds rows and cells, and adds event listener for color choice
function makeGrid() {

    //reset the grid each time the function runs
    grid.innerHTML = '';

    //Define variables for height and width and background color
    let inputH = document.getElementById("inputHeight").value;
    let inputW = document.getElementById("inputWidth").value;
    let inputColor = document.getElementById("colorPicker");
    const applyColor = function(cell) {
        cell.addEventListener("click", function () {
            cell.style.backgroundColor = inputColor.value;
        });
    };
    //draw the canvas based on user input and add event listener for color choice
    for (var h = 0; h < inputH; h++) {
        var row = grid.insertRow(h);
        for (var w = 0; w < inputW; w++) {
            var cell = row.insertCell(w);
            cell.addEventListener("click", applyColor(cell));
        //close my nested loop for the width
        }
    //close my for loop for the height
    }
//close the makeGrid() function
}
