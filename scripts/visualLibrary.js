function Item() {
    this.addToDocument = function () { document.body.appendChild(this.myItem); }
}

function Button() {
    this.createButton = function(text, id){
        this.myItem = document.createElement("button");
        this.myItem.setAttribute("id", id);
        this.myItem.innerHTML = text;
    },
    this.addClickEventHandler = function(handler, args) {
        this.myItem.onmouseup = function() { handler(args); }
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

function Dropdown() {
    this.createDropdown = function(dict, id, selected){
        this.myItem = document.createElement("select");
        this.myItem.setAttribute("id", id);
        for (var key in dict) {
            this.myItem.add(new Option(key));
        }
        this.myItem.setAttribute("selected", selected);
    }, 
    this.getSelected = function(args){
        selected = this.myItem.options[this.myItem.selectedIndex].text;
        return selected;
    }
}

function Input() {
    this.createInput = function(text, id) {
        this.myItem = document.createElement("input");
        this.myItem.setAttribute("id", id);
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
        this.myItem.style.border = "thick solid #000000";
    }
    this.setSrc = function(src) {
        this.myItem.setAttribute("src", src);
    }
}