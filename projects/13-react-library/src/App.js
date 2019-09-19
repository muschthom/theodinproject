import React from 'react';
import './App.css';

let myLibrary = [];
let counter = 0;
let tblBody = document.getElementById("tbody");

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
addBookToLibrary(1, "2222", "John Ronald Reuel Tolkien", "read");
addBookToLibrary(2, "3333", "John Ronald Reuel Tolkien", "read");
addBookToLibrary(3, "4444", "John Ronald Reuel Tolkien", "read");

function Header() {
    return (
        <div>
            <h1>Library</h1>
            <button className="add">Add new book</button>
        </div>
    );
}


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
}

function UnreadButton() {
    return (
        <button
            onClick={() => this.toggleRead(this, myLibrary)}
        >
            mark as unread
        </button>
    )
}

function DeleteButton() {
    return (
        <button className="deleteBtn"
                id={myLibrary[0].id}
                onClick={function (e) {
                    alert("id" + e);
                    for (var key in e) {
                        var value = e[key];
                        console.log("key = " + key + "; value =" + value);

                    }
                }
                }
        >

        </button>
    )
}


function Table() {
    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Read?</th>
                <th>Switch?</th>
                <th>Remove?</th>
            </tr>
            <TableData array={myLibrary}/>

            </tbody>

        </table>

    )
}

function TableData(props) {

    const listItems = props.array.map((step) =>
        <tr key = {step.id}>
            <td>{step.name}</td>
            <td>{step.author}</td>
            <td>{step.read}</td>
            <td><UnreadButton/></td>
            <td><DeleteButton/></td>
        </tr>
    );

    return (
        <>{listItems}</>
    );
}

function Footer() {
    return (
        <footer>
            <p>credits: icon by <a href="https://pixabay.com/users/openclipart-vectors-30363/">OpenClipart-Vectors /
                27427 images</a> on <a
                href="https://pixabay.com/vectors/garbage-icon-rubbish-trash-1295900/">pixabay.com</a></p>
        </footer>
    );
}

function App() {
    return (
        <div className="main">
            <Header/>
            <Table/>
            <Footer/>
        </div>
    );
}

export default App;
