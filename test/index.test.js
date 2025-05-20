const { document } = require("./helpers");

require("../index.js"); 

// Sample test suite for JavaScript event handling
describe("Handling Events with JavaScript", () => {
	let changeColorButton;
	let resetColorButton;
	let textInput;
	let keyPressDisplay;
	let textInputDisplay;

	beforeEach(() => {
		changeColorButton = document.getElementById("changeColorButton");
		resetColorButton = document.getElementById("resetColorButton");
		textInput = document.getElementById("textInput");
		keyPressDisplay = document.getElementById("keyPressDisplay");
		textInputDisplay = document.getElementById("textInputDisplay");
	});

	it("should select the changeColorButton element", () => {
		expect(changeColorButton).not.toBeNull();
	});

	it("should select the resetColorButton element", () => {
		expect(resetColorButton).not.toBeNull();
	});

	it("should select the textInput element", () => {
		expect(textInput).not.toBeNull();
	});

	it("should display the key pressed by the user", () => {
		const event = new window.KeyboardEvent("keydown", { key: "A" });
		document.dispatchEvent(event);
		expect(keyPressDisplay.textContent).toContain("A");
	});

	it("should display user input in real-time", () => {
		textInput.value = "Hello";
		const event = new window.Event("input");
		textInput.dispatchEvent(event);
		expect(textInputDisplay.textContent).toContain("Hello");
	});
});
