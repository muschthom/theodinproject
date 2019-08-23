import {showProjects, allEvents} from "./projectDiv";
import {updateToDos, editToDoDialog} from "./toDoListDiv";

function component(type, id, classes, content) {
    const element = document.createElement(type);

    if (id !== "") {
        element.id = id;
    }

    if (classes !== "") {
        element.classList.add(classes);
    }

    if (content !== "") {
        element.innerHTML = content;
    }
    return element;
}

function ListNode(id, title, descr, dueDate, prio) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const para = document.createElement("p");
    const date = document.createElement("p");
    const prior = document.createElement("p");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");


    div.id = id;
    div.classList.add("listNode");
    header.innerHTML = title + "";
    para.innerHTML = descr + "";
    date.innerHTML = dueDate + "";
    prior.innerHTML = prio + "";

    btnEdit.innerHTML = "";
    btnEdit.setAttribute("id", "editToDo" + id);
    btnEdit.setAttribute("class", "inline");
    btnEdit.setAttribute("class", "editBtn");
    btnEdit.style.background = "url('../src/img/edit.png')";
    btnEdit.style.backgroundSize = "25px 25px";
    btnEdit.addEventListener("click", function () {
        //console.log("this.id = " + this.id);
        editToDo(this, allEvents);
    });

    btnDelete.innerHTML = "";
    btnDelete.setAttribute("id", "deleteToDo" + id);
    btnDelete.setAttribute("class", "inline");
    btnDelete.setAttribute("class", "deleteBtn");
    btnDelete.style.background = "url('../src/img/delete.png')";
    btnDelete.style.backgroundSize = "25px 25px";
    btnDelete.addEventListener("click", function () {
        //console.log("this.id = " + this.id);
        let r = confirm("Do you really want to delete this to-do?");
        if (r === true) {
            deleteToDo(this, allEvents);
        }
    });

    div.appendChild(header);
    div.appendChild(btnDelete);
    div.appendChild(btnEdit);
    div.appendChild(para);
    div.appendChild(date);
    div.appendChild(prior);
    return div;
}

//make background of input-form blur/unblur
let toggleBlur = function () {
    let element = document.getElementById("content");
    element.classList.toggle("blur");
};

function deleteDiv(selector) {
    console.log("deleteDiv");
    let elem = document.querySelector(selector);
    elem.parentNode.removeChild(elem);
    toggleBlur();

}

function editToDo(el, arr) {
    let id = el.id;
    id = id.slice(8);
    console.log("editToDo id = " + id);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < arr[i].length; j++) {
            if (arr[i][j].id == id) {
                let obj = arr[i][j];
                editToDoDialog(obj, allEvents);

            }
        }
    }
}

function deleteToDo(el, arr) {
    let id = el.id;
    id = id.slice(10);
    //search for id in data
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < arr[i].length; j++) {
            if (arr[i][j].id == id) {
                console.log("position = " + i);
                arr[i].splice(j, 1);
                console.log("to do deleted");
            }
        }
    }


    updateToDos();

}


export {
    component,
    ListNode,
    toggleBlur,
    deleteDiv
}
