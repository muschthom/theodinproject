let myLibrary = [];
let counter = 0;


function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
    show = function () {
        return (name + " " + author + " " + read);
    }
}

function addBookToLibrary(name, author, read) {
    let newBook = new Book(name, author, read);
    myLibrary.push(newBook);
}

addBookToLibrary("name1", "author1", "true");
addBookToLibrary("name2", "author2", "true");
addBookToLibrary("name3", "author3", "false");
addBookToLibrary("name4", "author4", "true");
addBookToLibrary("name5", "author5", "false");
showBooks(myLibrary);

function showBooks(arr) {
    arr.forEach(function (el) {
        let p = document.createElement("p");
        let btnDelete = document.createElement("button");
        let br = document.createElement("br");
        btnDelete.innerHTML = "Delete entry";
        btnDelete.setAttribute("id", counter);
        btnDelete.setAttribute("class", "inline");
        p.innerHTML = el.name + " " + el.author + " " + el.read;
        document.querySelector("#main").appendChild(p);
        document.querySelector("#main").appendChild(btnDelete);
        document.querySelector("#main").appendChild(br);
        counter++;
    })
}


let add = document.querySelector("#add");

add.addEventListener("click", function () {
    toggleInput();
    toggleBlur();
});

let submitBook = document.querySelector("#addBtn");
let cancelBook = document.querySelector("#cancelBtn");

cancelBook.addEventListener("click", function () {
    name.innerHTML = "";
    author.innerHTML = "";
    toggleInput();
    toggleBlur();
});

submitBook.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let radio = document.getElementsByName('read');

    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            ((radio[i].value) === "yes") ? radio = true : radio = false;
            break;
        }
    }

    console.log("name = " + name + " author = " + author + " radio = " + radio);
    let y = myLibrary.length;
    addBookToLibrary(name, author, radio);
    //console.log("formData = " + formData.toString());
    //formData = new Book(formData);
    toggleInput();
    toggleBlur();
    for (let i = y; i <= myLibrary.length; i++){
        let p = document.createElement("p");
        p.innerHTML = myLibrary[i].name + " " + myLibrary[i].author + " " + myLibrary[i].read;
        document.querySelector("#main").appendChild(p);

    }
    counter++;
    name.innerHTML = "";
    author.innerHTML = "";

});

let toggleInput = function () {
    let element = document.getElementById("input");
    element.classList.toggle("hidden");
};

let toggleBlur = function () {
    let element = document.getElementById("main");
    element.classList.toggle("blur");
};