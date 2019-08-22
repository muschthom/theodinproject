import {component, ListNode, toggleBlur, deleteDiv} from './template';
import {allEvents} from './projectDiv';

let toDoCounter = 0;

class ToDoItem {
    constructor(id, title, descr, dueDate, prio) {
        this.id = id;
        this.title = title;
        this.descr = descr;
        this.dueDate = dueDate;
        this.prio = prio;
    }
}

let x = new ToDoItem("1", "title", "desc", Date.now(), "prio");
console.table(x);
console.log(x);

//let node = new ListNode(x.id, x.title, x.descr, x.dueDate, x.prio);


function addToProject(item, projectArr) {
    projectArr.push(item);
}


function updateToDos () {
    if (allEvents !== []) {
        let toDoListDivFinal = document.querySelector("#toDoListDivFinal");
        try {
            while (toDoListDivFinal.hasChildNodes()) {
                toDoListDivFinal.removeChild(toDoListDivFinal.lastChild);
            }
        } catch {
            console.log("catch");
        }
        //alle to dos anzeigen als new Node
        for (let i = 0; i < allEvents.length; i++) {
            for (let j = 2; j < allEvents[i].length; j++) {
                console.log("allEvents[i][j].id = " + allEvents[i][j].id);

                //console.log("allEvents[i][j][id] = " + allEvents[i][j][id]);
                let node = new ListNode(allEvents[i][j].id, allEvents[i][j].title + "", allEvents[i][j].descr + "",
                    allEvents[i][j].dueDate + "", allEvents[i][j].prio + "");
                console.log("node = " + node);
                //document.querySelector("body").appendChild(node);
                document.querySelector("#toDoListDivFinal").appendChild(node);
            }
        }
    }
}


function showToDoList() {
    ///console.log("toDoListDiv vor Erstellung " + toDoListDiv);
    if(document.querySelector("#toDoListDiv")===null) {
        let content = document.getElementById("content");
        let toDoListDiv = content.appendChild(component("div", "toDoListDiv", "dark", ""));
        toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));
        let addToDo = addToDoBtn(toDoListDiv, "Add a new To Do");
        let toDoListDivFinal = toDoListDiv.appendChild(component("div", "toDoListDivFinal", "", ""));
    }
    /*
    if (allEvents !== []) {
        //alle to dos anzeigen als new Node
        for (let i = 0; i < allEvents.length; i++) {
            for (let j = 2; j <= allEvents[i].length; j++) {
                let node = new ListNode(allEvents[i][j].id + "", allEvents[i][j].title + "", allEvents[i][j].descr + "",
                    allEvents[i][j].dueDate + "", allEvents[i][j].prio + "");
                console.log("node = " + node);
                //document.querySelector("body").appendChild(node);
                //document.querySelector("#toDoListDiv").appendChild(node);
            }
        }
    }

     */

}


function addToDoBtn(parent, content) {
    let btnAddToDo = document.createElement("button");
    btnAddToDo.innerHTML = content;
    //"Add a project/event";
    btnAddToDo.addEventListener("click", function () {
        console.log("btnAddToDo");
        addToDoDialog();
        toggleBlur();
    });
    parent.appendChild(btnAddToDo);
}

function addToDoDialog() {
    let div = component("div", "addToDo", "", "");
    let head = component("h3", "", "", "Create a To Do");
    div.appendChild(head);
    let form = component("form", "createToDo", "", "");
    let labelName = component("p", "", "", "Name of To Do");
    let toDoName = component("input", "toDoName", "", "");
    let labelDescr = component("p", "", "", "Description");
    let toDoDescr = component("input", "toDoDescr", "", "");
    let labelDate = component("p", "", "", "Date");
    let toDoDate = component("input", "toDoDate", "", "");
    toDoDate.type = "date";
    let labelPrio = component("p", "", "", "Priority");
    let toDoPrio = component("input", "toDoPrio", "", "");
    let btnCreateToDo = component("button", "btnCreateToDo", "", "Create To Do");
    btnCreateToDo.addEventListener("click", function () {
        let id = toDoCounter;
        let title = document.getElementById("toDoName").value;
        let descr = document.getElementById("toDoDescr").value;
        let dueDate = document.getElementById("toDoDate").value;
        let prio = document.getElementById("toDoPrio").value;
        console.log("create To Do: id = " + id +
            " : title = " + title + " ; descr = " + descr + " dueDate = " + dueDate + " prio = " + prio);
        createToDo(allEvents[0], id, title, descr, dueDate, prio);
        console.log("createToDo4 -> all Events = " + allEvents);
        //document.querySelector("#toDoListDiv").appendChild(node);
        //toDoListDiv.appendChild(node);
        toDoCounter++;
        deleteDiv("#addToDo");
        //showToDoList();
        updateToDos();

    });
    let btnCancelToDo = component("button", "btnCancelToDo", "", "Cancel");
    btnCancelToDo.addEventListener("click", function () {
        console.log("btnCancelToDo");
        deleteDiv("#addToDo");
    });
    form.appendChild(labelName);
    form.appendChild(toDoName);
    form.appendChild(labelDescr);
    form.appendChild(toDoDescr);
    form.appendChild(labelDate);
    form.appendChild(toDoDate);
    form.appendChild(labelPrio);
    form.appendChild(toDoPrio);
    div.appendChild(form);
    div.appendChild(btnCancelToDo);
    div.appendChild(btnCreateToDo);
    document.body.appendChild(div);
}

function createToDo(arr, id, title, descr, dueDate, prio) {
    console.log("createToDo1 -> all Events = " + allEvents);
    console.table(allEvents);

    let newToDo = new ToDoItem(id, title, descr, dueDate, prio);
    console.log("createToDo2 -> all Events = " + allEvents);

    arr.push(newToDo);
    console.log("createToDo3 -> all Events = " + allEvents);
    console.table(allEvents);

}

export {
    showToDoList
}