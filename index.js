// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "green";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "white";
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
	document.querySelector(
		"#keyPressDisplay"
	).textContent = `You pressed ${event.key}`;
	console.log("Key Down", event.key);
}

// Process Text Input
document.querySelector("#textInput");

// Function to display user input in real-time
function displayUserInput() {
	const input = document.querySelector("#textInput");
	const display = document.querySelector("#textInputDisplay");
	display.textContent = input.value;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
	.getElementById("changeColorButton")
	.addEventListener("click", changeBackgroundColor);

// Attach event listener to reset background color when the body is double-clicked
document
	.getElementById("resetColorButton")
	.addEventListener("dblclick", resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener("keydown", displayKeyPress);

// Attach event listener to display user input in real-time as they type
document
	.getElementById("textInput")
	.addEventListener("input", displayUserInput);
