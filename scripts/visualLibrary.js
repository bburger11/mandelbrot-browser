function Item() {
    this.addToDocument = function () { document.body.appendChild(this.myItem); }
}

function Anchor() {
    this.createAnchor = function(href) {
        this.myItem = document.createElement("a");
        this.myItem.setAttribute("href", href);
    }
    this.addToAnchor = function(object) {
        this.myItem.appendChild(object.myItem);
    }
}

function Button() {
    this.createButton = function(text, id) {
        this.myItem = document.createElement("button");
        this.myItem.setAttribute("id", id);
        this.myItem.innerHTML = text;
    },
    this.addClickEventHandler = function(handler, args) {
        this.myItem.onmouseup = function() { handler(args); }
    }
}


function Div() {
    this.createDiv = function(id_name, class_name) {
        this.myItem = document.createElement("div");
        this.myItem.setAttribute("id", id_name);
        this.myItem.setAttribute("class", class_name);
    }
    this.addToDiv = function(object) {
        this.myItem.appendChild(object.myItem);
    }
}

function Image() {
    this.createImage = function(src, id) {
        this.myItem = document.createElement("img");
        this.myItem.setAttribute("src", src);
        this.myItem.setAttribute("id", id);
    }
    this.addClickEventHandler = function(funcName) {
        this.myItem.setAttribute("onclick", funcName);
    }
}

function Label() {
    this.createLabel = function(text, id) {
        this.myItem = document.createElement("p");
        this.myItem.setAttribute("id", id);
        this.myItem.appendChild(document.createTextNode(text));
    },
    this.setText = function(text) {
        this.myItem.innerHTML = text;
    }
}