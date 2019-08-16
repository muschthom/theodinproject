import {component, ListNode, toggleBlur} from './template';
import {allEvents, addBtn} from './projectDiv';

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

function addToProject (item, projectArr){
    projectArr.push(item);
}



function showToDoList(){
    let content = document.getElementById("content");
    let toDoListDiv = content.appendChild(component("div", "toDoListDiv", "dark", ""));
    toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));
    let addToDo = addToDoBtn(toDoListDiv, "Add a new To Do");
    addToDo.addEventListener("click", function () {
        addToProject(node, allEvents[0]);

    });

    console.log("showToDoList");
    //toDoListDiv.appendChild(node);
}


function addToDoBtn(parent, content) {
    let btnAddToDo = document.createElement("button");
    btnAddToDo.innerHTML = content;
    //"Add a project/event";
    btnAddProject.addEventListener("click", function () {
        console.log("btnAddToDo");
        addToDoDialog();
        toggleBlur();
    });
    parent.appendChild(btnAddProject);
}

function addToDoDialog() {
    let div = component("div", "addToDo", "", "");
    let head = component("h3", "", "", "Create a To Do");
    div.appendChild(head);
    let form = component("form", "createToDo", "", "");
    let labelName = component("p", "", "", "Name of To Do");
    let toDoName = component("input", "toDoName", "", "");
    let labelDescr = component("p", "", "", "Name of To Do");
    let toDoDescr = component("input", "toDoName", "", "");
    let labelDate = component("p", "", "", "Name of To Do");
    let toDoDate = component("input", "toDoName", "", "");
    let labelPrio = component("p", "", "", "Name of To Do");
    let toDoPrio = component("input", "toDoName", "", "");
    let btnCreateToDo = component("button", "btnCreateToDo", "", "Create To Do");
    btnCreateToDo.addEventListener("click", function () {
        //createToDo();
    });
    let btnCancelProject = component("button", "btnCancelProject", "", "Cancel");
    btnCancelProject.addEventListener("click", function () {
        deleteDiv("#addProject");
    });
    form.appendChild(label);
    form.appendChild(projectName);
    div.appendChild(form);
    div.appendChild(btnCancelProject);
    div.appendChild(btnCreateProject);
    document.body.appendChild(div);
}

export {
    showToDoList
}