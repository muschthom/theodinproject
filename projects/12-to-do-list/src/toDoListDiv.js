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

let x = new ToDoItem("1", "title", "desc", "dueDate", "prio");
console.table(x);
console.log(x);

let node = new ListNode(x.id, x.title, x.descr, x.dueDate, x.prio);


function addToProject(item, projectArr) {
    projectArr.push(item);
}


function showToDoList() {
    let content = document.getElementById("content");
    let toDoListDiv = content.appendChild(component("div", "toDoListDiv", "dark", ""));
    toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));
    let addToDo = addToDoBtn(toDoListDiv, "Add a new To Do");
    addToDo.addEventListener("click", function () {
        addToProject(node, allEvents[0]);
    });
    console.log("showToDoList");
    if(allEvents === []) {
    }else{
        toDoListDiv.appendChild(node);
    }
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
    let toDoDescr = component("input", "toDoName", "", "");
    let labelDate = component("p", "", "", "Date");
    let toDoDate = component("input", "toDoName", "", "");
    toDoDate.type = "date"; 
    let labelPrio = component("p", "", "", "Priority");
    let toDoPrio = component("input", "toDoName", "", "");
    let btnCreateToDo = component("button", "btnCreateToDo", "", "Create To Do");
    btnCreateToDo.addEventListener("click", function () {
        //createToDo();
        console.log("btnCreateToDo");
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

export {
    showToDoList
}