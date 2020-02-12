Div.prototype      = new Item();
Label.prototype    = new Item();
Anchor.prototype   = new Item();
Image.prototype    = new Item();

// Globs
var BASE_URL = "http://138.197.0.13:51018/bitmap/";
var xmin = -2, xmax = 2;
var ymin = 2, ymax = -2;
var scale_value = 2;

var heading = new Div();
heading.createDiv("headerDiv", "");

var title = new Label();
title.createLabel("Mandelbrot Browser", "mandelTitle");
heading.addToDiv(title);

var author = new Label();
author.createLabel("Created by Ben Burger", "authorLabel");
heading.addToDiv(author);

var githubAnchor = new Anchor();
githubAnchor.createAnchor("https://github.com/bburger11/mandelbrot-browser");
var githubImage = new Image();
githubImage.createImage("../img/github.png", "githubImage");
githubAnchor.addToAnchor(githubImage);
heading.addToDiv(githubAnchor);

var websiteAnchor = new Anchor();
websiteAnchor.createAnchor("#");
var websiteLabel = new Label();
websiteLabel.createLabel("My Website (eh.. coming soon)", "websiteLabel");
websiteAnchor.addToAnchor(websiteLabel);
heading.addToDiv(websiteAnchor);

// Main div -- contains all content
var container = new Div();
container.createDiv("mainDiv", "container");

// Left and right divs
var leftPanel = new Div();
leftPanel.createDiv("descPanel", "leftPanel");
var rightPanel = new Div();
rightPanel.createDiv("imagePanel", "rightPanel");

// Description on Left
var instrTitle = new Label();
instrTitle.createLabel("How to use:", "instrTitle");
leftPanel.addToDiv(instrTitle);

var instr = new Label();
instr.createLabel("Simply click anywhere in the image to zoom to that point in the image. The center position and scale value will be updated below.", "instr");
leftPanel.addToDiv(instr);

var centerLabel = new Label();
centerLabel.createLabel("Center: (0, 0)", "centerLabel");
leftPanel.addToDiv(centerLabel);

var scaleLabel = new Label();
scaleLabel.createLabel("Scale: 2.0", "scaleLabel");
leftPanel.addToDiv(scaleLabel);

// Image on right
var mandelImage = new Image();
mandelImage.createImage("../img/default.bmp", "mandelImage");
mandelImage.addClickEventHandler("clickImage(event)");
rightPanel.addToDiv(mandelImage);

// Add main container to document
heading.addToDocument();
container.addToDiv(leftPanel);
container.addToDiv(rightPanel);
container.addToDocument();

function clickImage(event) {
    // Get mouse position on image
    var oX = event.offsetX;
    var oY = event.offsetY;
    var coords = "offset - X: " + oX + ", Y coords: " + oY;
    console.log(coords);
    // Simple scale mapping function (in domain -> out domain)
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    // Scale mouse position to current scale size
    mandelX = scale(oX, 0, 500, xmin, xmax);
    mandelY = scale(oY, 0, 500, ymin, ymax);
    var coords2 = "scaled - X: " + mandelX + ", Y coords: " + mandelY;
    console.log(coords2);
    // Calculate next scale value
    scale_value = scale_value * Math.exp(Math.log(0.0001/2)/(20 + 1))
    // Get new image
    createAndGetImage(scale_value, mandelX, mandelY);
    centerLabel.setText("Center: (" + mandelX.toFixed(5) + ", " + mandelY.toFixed(5) + ")")
    scaleLabel.setText("Scale: " + scale_value.toFixed(5));

    // Scale the min and max values by the same amount
    xmin = mandelX - scale_value;
    xmax = mandelX + scale_value;
    ymin = mandelY + scale_value;
    ymax = mandelY - scale_value;
}

function createAndGetImage(s, x, y) {
    if (s && x && y) {
        var mandelPost = new XMLHttpRequest();
        mandelPost.open("POST", BASE_URL + s + "/" + x + "/" + y + "/");
        var data = {
            "s": s,
            "x": x,
            "y": y
        };
        console.log(data);
        mandelPost.onerror = function(e) {
            console.error(mandelPost.statusText);
        }
        mandelPost.onload = function(e) {
            console.log(mandelPost.responseText);
            var filename    = JSON.parse(mandelPost.responseText)["filename"];
            var mandelGet = new XMLHttpRequest();
            mandelGet.responseType = "blob";
            mandelGet.open("GET", BASE_URL + filename + "/");
            mandelGet.onerror = function(e) {
                console.error(mandelGet.statusText);
            }
            mandelGet.onload = function(e) {
                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(mandelGet.response);
                document.querySelector("#mandelImage").src = imageUrl;
            }
            mandelGet.send(filename);
        }
        mandelPost.send(data);        
    } else {
        console.log("Something's missing.");
    }

}