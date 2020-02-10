Label.prototype    = new Item();
Button.prototype   = new Item();
Dropdown.prototype = new Item();
Input.prototype    = new Item();
Div.prototype      = new Item();
Image.prototype    = new Item();

// Main div -- contains all content
var container = new Div();
container.createDiv("mainDiv", "container");

// Create 3 panels
var leftPanel = new Div();
leftPanel.createDiv("optionsController", "leftPanel");
var rightPanel = new Div();
rightPanel.createDiv("mainCanvas", "rightPanel");


var tLabel = new Label();
tLabel.createLabel("Mandelbrot Browser", "titleLabel");
leftPanel.addToDiv(tLabel);

var xLabel = new Label();
xLabel.createLabel("x-value: ", "x-val-label");
leftPanel.addToDiv(xLabel);

var xInput = new Input();
xInput.createInput("Stuff", "x-val-input");
leftPanel.addToDiv(xInput);

var yLabel = new Label();
yLabel.createLabel("y-value:", "y-val-label");
leftPanel.addToDiv(yLabel);

var yInput = new Input();
yInput.createInput("Stuff", "y-val-input");
leftPanel.addToDiv(yInput);

var sLabel = new Label();
sLabel.createLabel("scale value: ", "s-val-label");
leftPanel.addToDiv(sLabel);

var sInput = new Input();
sInput.createInput("Stuff", "s-val-input");
leftPanel.addToDiv(sInput);

var upButton = new Button();
upButton.createButton("UP", "upVoteButton");
leftPanel.addToDiv(upButton);
// upButton.addClickEventHandler(sendVote, "up");

var movieImg = new Image();
movieImg.createImage("https://picsum.photos/200/300", "movieImage");
rightPanel.addToDiv(movieImg);

// Add divs to main container
container.addToDiv(leftPanel);
container.addToDiv(rightPanel);

// Add main container to document
container.addToDocument();