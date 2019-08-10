let myLibrary = [];
let counter = 0;
let tblBody = document.getElementById("tbody");

//Book object
class Book {
    constructor(id, name, author, read) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.read = read;
    }
}


function addBookToLibrary(id, name, author, read) {
    let newBook = new Book(id, name, author, read);
    myLibrary.push(newBook);
}


//initial data
addBookToLibrary(0, "Herr der Ringe", "John Ronald Reuel Tolkien", "read");
addBookToLibrary(1, "Mein Name sei Gantenbein", "Max Frisch", "read");
addBookToLibrary(2, "GRM - Brainfuck", "Sybille Berg", "read");
addBookToLibrary(3, "Qualityland", "Marc-Uwe Kling", "read");
addBookToLibrary(4, "Homo Faber", "Max Frisch", "unread");

//show initial data on screen
showBooks(myLibrary);


//function walking through the array, take data and add to table
//add buttons
function showBooks(arr) {
    arr.forEach(function (el) {
        //read Button
        let btnRead = document.createElement("button");
        el.read === "read" ? btnRead.innerHTML = "mark as unread" : btnRead.innerHTML = "mark as read";
        btnRead.setAttribute("id", "_" + el.id);
        btnRead.addEventListener("click", function () {
            toggleRead(this, myLibrary);
        });

        //delete button
        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "";
        btnDelete.setAttribute("id", el.id);
        btnDelete.setAttribute("class", "inline");
        btnDelete.setAttribute("class", "deleteBtn");
        btnDelete.style.background = "url('img/garbage-1295900_640.png')";
        btnDelete.style.backgroundSize = "27px 32px";
        btnDelete.addEventListener("click", function () {
            deleteEntry(this, myLibrary);
        });

        //create table elements
        let newRow = tblBody.insertRow();
        let newCell0 = newRow.insertCell(0);
        let newCell1 = newRow.insertCell(1);
        let newCell2 = newRow.insertCell(2);
        let newCell3 = newRow.insertCell(3);
        let newCell4 = newRow.insertCell(4);

        // Append a nodes to the cell
        newCell0.innerHTML = (el.name);
        newCell1.innerHTML = (el.author);
        newCell2.innerHTML = (el.read);
        newCell3.appendChild(btnRead);
        newCell4.appendChild(btnDelete);

        //counter is id for next entry
        counter++;
    })
}

//btn for new entry
let add = document.querySelector("#add");
add.addEventListener("click", function () {
    toggleInput();
    toggleBlur();
});

//btns of input-div + functions
let submitBook = document.querySelector("#addBtn");
let cancelBook = document.querySelector("#cancelBtn");

cancelBook.addEventListener("click", function () {
    name.innerHTML = "";
    author.innerHTML = "";
    toggleInput();
    toggleBlur();
});

submitBook.addEventListener("click", function () {
    //get data from form
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let radio = document.getElementsByName('read');

    //get value of radio buttons
    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            ((radio[i].value) === "yes") ? radio = "read" : radio = "unread";
            break;
        }
    }

    //add new entry to array
    addBookToLibrary(counter, name, author, radio);
    toggleInput();
    toggleBlur();
    redraw();

    counter++;
    name.innerHTML = "";
    author.innerHTML = "";

});


//make input-form visible/invisible
let toggleInput = function () {
    let element = document.getElementById("input");
    element.classList.toggle("hidden");
};

//make background of input-form blur/unblur
let toggleBlur = function () {
    let element = document.getElementById("main");
    element.classList.toggle("blur");
};


//remove entry: get id of book-object
function deleteEntry(e, arr) {
    let id = e.id;

    //search for id in data
    for (let i = 0; i < arr.length; i++) {
        //if id found, remove this element
        if (arr[i].id == id) {
            console.log("position = " + i);
            arr.splice(i, 1);
        }
    }
    redraw();
}

//function of "mark as read" button
function toggleRead(e, arr) {
    // get id of button
    let id = e.id;

    //remove first sign = "_"
    id = id.slice(1);

    //search for id in data
    for (let i = 0; i < arr.length; i++) {
        //if id found -> change val "read"
        if (arr[i].id == id) {
            arr[i].read === "read" ? arr[i].read = "unread" : arr[i].read = "read";
        }
    }
    redraw();
}

//redraw = delete all rows and redraw from data-set
function redraw() {
    while (tblBody.hasChildNodes()) {
        tblBody.removeChild(tblBody.lastChild);
    }
    showBooks(myLibrary);
}