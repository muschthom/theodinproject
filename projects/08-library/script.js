let myLibrary = [];


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
        p.innerHTML = el.name + " " + el.author + " " + el.read;
        document.querySelector("#main").appendChild(p);
    })
}


let add = document.querySelector("#add");

add.addEventListener("click", function () {
    toggleInput();
});

let submitBook = document.querySelector("#addBtn");

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
    for (let i = y; i <= myLibrary.length; i++){
        let p = document.createElement("p");
        p.innerHTML = myLibrary[i].name + " " + myLibrary[i].author + " " + myLibrary[i].read;
        document.querySelector("#main").appendChild(p);

    }


});

let toggleInput = function () {
    let element = document.getElementById("input");
    element.classList.toggle("hidden");
};