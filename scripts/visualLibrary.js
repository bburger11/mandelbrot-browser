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

function Image() {
    this.createImage = function(src, id) {
        this.myItem = document.createElement("img");
        this.myItem.setAttribute("src", src);
        this.myItem.setAttribute("id", id);
        //this.myItem.style.border = "thick solid #000000";
    }
    this.addClickEventHandler = function(funcName) {
        this.myItem.setAttribute("onclick", funcName);
    }
}