document.addEventListener("DOMContentLoaded", function() {

	// Call the function to create the Grid
	createGrid();

	// get the slider and display the default value
	let slider = document.querySelector(".slider");
	document.getElementById("slidervalue").innerHTML = `Grid size: ${slider.value} x ${slider.value}`;

	// add a Eventlistener to the slider an call the function to change the grid
	slider.addEventListener("input", () => {
		changeGridpattern(slider.value);
	});

	// add a Eventlistener to the change of the color
	let user_color = document.getElementById("colorpicker");
	user_color.addEventListener("input", () => {
		changeColor();
	});

	// add a Eventlistener to the Erase button 
	let e_button = document.getElementById("erase");
	e_button.addEventListener("click", () => {
		cleanBoard();
	});
});

function createGrid(gridsize = 16) {

	//Default grid size is 16
	// Create the grid Div with the class name grid
	const grid = document.createElement("div");
	grid.className = "grid";
	grid.style.backgroundColor = "white";

	// make a grid sized accordign to the requested grid size
	for (let i = 0; i < gridsize * gridsize; i++) {
		// Make one square as a div, with the classname + square_number of the square
		let square = document.createElement("div");
		square.className = `square-${i+1}`;

		// Get the defalut selected color 
		//Add a eventlistener to the div that changes the color of the square
		let color = document.getElementById("colorpicker").value;
		square.addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = color;
		});

		// Append the square to the grid
		grid.append(square);
	}

	// Append the grid div containing all of the squares to the grid div
	document.querySelector(".maingrid").append(grid);
}

function changeGridpattern(square_num) {

	// Check for the Slider change
	let value = document.getElementById("slidervalue");
	value.innerHTML = `Grid size: ${square_num} x ${square_num}`;

	// Clear out the old grid and make a new one with the new sizing
	document.querySelector(".maingrid").innerHTML = "";
	createGrid(square_num);

	// Get the new grid and change the style properties
	let grid = document.querySelector(".grid");
	grid.style.gridTemplateColumns = `repeat(${square_num}, ${550/square_num}px)`;
	grid.style.gridTemplateRows = `repeat(${square_num}, ${550/square_num}px)`;

}

function changeColor() {
	// get the choosen color
	let color = document.getElementById("colorpicker").value;

	// Get all the squares and add a eventlistener
	document.querySelectorAll('[class^="square"]').forEach((square) => {
		square.addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = color;
		});
	});
}


function cleanBoard() {
	// Get all the squares and change the color to white
	document.querySelectorAll('[class^="square"]').forEach((square) => {
		square.style.backgroundColor = "white";
	});
}