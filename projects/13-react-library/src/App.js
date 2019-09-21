import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

let myLibrary = [];
let counter = 0;
let id = 4;

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
    return id++;
}


//initial data
addBookToLibrary(0, "Herr der Ringe", "John Ronald Reuel Tolkien", "read");
addBookToLibrary(1, "2222", "John Ronald Reuel Tolkien", "read");
addBookToLibrary(2, "3333", "John Ronald Reuel Tolkien", "read");

let hide = true;

function Header() {
    return (
        <div>
            <h1>Library</h1>
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


class TableData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("this in table data " + this);
        console.table(this);

        //this.props.callback(myLibrary);

        const listItems = this.props.data.map((step) =>
            <tr key={step.id}>
                <td>{step.name}</td>
                <td>{step.author}</td>
                <td>{step.read}</td>
                <td>
                    <button className="readBtn" id={step.id}
                            onClick={function () {
                                let id = step.id;
                                console.log("id readBtn" + id);
                                //id = id.slice(1);

                                //search for id in data
                                for (let i = 0; i < myLibrary.length; i++) {
                                    //if id found -> change val "read"
                                    if (myLibrary[i].id == id) {
                                        myLibrary[i].read === "read" ? myLibrary[i].read = "unread" : myLibrary[i].read = "read";
                                    }
                                }
                            }
                            }
                            >
                                mark as unread
                                </button>
                            </td>
                            <td>
                            <button className="deleteBtn" id={step.id}
                            onClick={function () {
                            let id = step.id;
                            console.log(" id = " + id);
                            //console.log(" e.id = " + e.valueOf());
                            //search for id in data
                            for (let i = 0; i < myLibrary.length; i++) {
                            //if id found, remove this element
                            if (myLibrary[i].id == id) {
                            myLibrary.splice(i, 1);
                            }
                            }

                            }
                            }
                            >

                            </button>
                            </td>
                            </tr>
                            )
                            ;



                            return (
                            <>{listItems}</>
                            );
                            }
                    }


                    function Footer() {
                    return (
                    <footer>
                    <p>credits: icon by <a href="https://pixabay.com/users/openclipart-vectors-30363/">OpenClipart-Vectors
                        /
                        27427 images</a> on <a
                        href="https://pixabay.com/vectors/garbage-icon-rubbish-trash-1295900/">pixabay.com</a></p>
                </footer>
                );
                }

                class AddBookDialogue extends React.Component {
                constructor(props) {
                super(props);
                this.handleShowClick = this.handleShowClick.bind(this);
                this.handleHideClick = this.handleHideClick.bind(this);
                this.submitBook = this.submitBook.bind(this);

                this.state = {
                hide: true,
            };
            }


                getContent(myLibrary) {
                console.log("callback AddBookDialogue");

                this.props.callback(myLibrary);
            }

                handleShowClick() {
                console.log("showDiv");
                this.setState({hide: false});
            }

                handleHideClick() {
                let div = document.querySelector("#input");
                console.log("hideDiv");
                this.setState({hide: true});
            }

                submitBook(myLibrary) {
                console.log("submit book");
                console.log("myLibrary = " + myLibrary);
                console.table(myLibrary);
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
                //addBookToLibrary(counter, name, author, radio);
                let newBook = new Book(id, name, author, null);
                //myLibrary.push(newBook);
                myLibrary.push(newBook);

                return id++;

            }

                render() {
                const hide = this.state.hide;

                let div = <div id="input">
                <form>
                <h2>Add a new book!</h2>
                Name of book:<br/>
                <input type="text" id="name" name="name" required/><br/>
                Name of author:<br/>
                <input type="text" id="author" name="author" required/><br/>
                Read?<br/>
                <input type="radio" id="readYes" name="read" value="yes" checked/>Yes<br/>
                <input type="radio" id="readNo" name="read" value="no"/>No<br/>


                </form>
                <button id="cancelBtn" onClick={this.handleHideClick}>Cancel</button>
                <button id="addBtn" onClick={() => {
                    this.submitBook(myLibrary);
                    this.handleHideClick();
                    console.log("this in AddBookDialogue" + this);
                    console.table(this);
                    this.getContent(myLibrary);

                }}>Submit
                </button>
                </div>;

                let showBtn = <button className="add" onClick={this.handleShowClick}>Add new book</button>;

                if (hide) {
                return (
                <>
                {showBtn}
                </>
                );
            } else {
                return (
                <>
                {showBtn}

                <div id="cancelAddBook" className="blur" onClick={this.handleHideClick}>
                </div>
                {div}
                </>
                );
            }


            }

            }


                class App extends React.Component {
                constructor(props) {
                super(props);
                this.state = {
                hide: true,
                data: myLibrary
            };

                this.getDataFromForm = this.getDataFromForm.bind(this);
            }

                getDataFromForm(params) {
                console.log("getDataFromForm");
                this.setState({
                data: params
            });
                console.log("state = " + this.state);
            }

                render() {

                return (
                <div className="main">
                <Header/>
                <AddBookDialogue callback={this.getDataFromForm}/>
                <table>
                <tbody>
                <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Read?</th>
                <th>Switch?</th>
                <th>Remove?</th>
                </tr>
                </tbody>
                <TableData data={this.state.data} />

                </table>

                <Footer/>
                </div>
                );
            }
            }

                export default App;
