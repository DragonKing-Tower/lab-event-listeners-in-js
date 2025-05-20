// Helpers for setting up the testing environment
const path = require("path");
const fs = require("fs");
const { JSDOM } = require("jsdom");

// Resolve the full path to index.html reliably
const htmlPath = path.resolve(__dirname, "../index.html");

// Read the HTML file synchronously
const html = fs.readFileSync(htmlPath, "utf8");

// Create a JSDOM instance and extract window and document
const dom = new JSDOM(html);
const { window } = dom;
const { document } = window;

// Expose globals for tests
global.window = window;
global.document = document;

module.exports = {
	window,
	document,
};
