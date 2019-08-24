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

function showAllToDos() {
    while (toDoListDivFinal.hasChildNodes()) {
        toDoListDivFinal.removeChild(toDoListDivFinal.lastChild);
    }
    for (let i = 0; i < allEvents.length; i++) {
        for (let j = 2; j < allEvents[i].length; j++) {
            console.log("allEvents[i][j].id = " + allEvents[i][j].id);

            let node = new ListNode(allEvents[i][j].id, allEvents[i][j].title + "", allEvents[i][j].descr + "",
                allEvents[i][j].dueDate + "", allEvents[i][j].prio + "");
            console.log("node = " + node);
            document.querySelector("#toDoListDivFinal").appendChild(node);
        }
    }
}


function updateToDos() {
    if (allEvents !== []) {
        let toDoListDivFinal = document.querySelector("#toDoListDivFinal");
        try {
            while (toDoListDivFinal.hasChildNodes()) {
                toDoListDivFinal.removeChild(toDoListDivFinal.lastChild);
            }
        } catch {
            console.log("catch");
        }
        try {
            let activeId = document.querySelector(".active");
            activeId = activeId.id;
            activeId = activeId.slice(7);
            console.log("try activeID slice in updateToDos = " + activeId);
            for (let i = 0; i < allEvents.length; i++) {
                if (allEvents[i][0] == activeId) {
                    for (let j = 2; j < allEvents[i].length; j++) {
                        // console.log("allEvents[i][j].id = " + allEvents[i][j].id);

                        let node = new ListNode(allEvents[i][j].id, allEvents[i][j].title + "", allEvents[i][j].descr + "",
                            allEvents[i][j].dueDate + "", allEvents[i][j].prio + "");
                        console.log("node = " + node);
                        document.querySelector("#toDoListDivFinal").appendChild(node);
                    }
                }
            }


        } catch {
            console.log("catch update to do");

            //alle to dos anzeigen als new Node
            for (let i = 0; i < allEvents.length; i++) {
                for (let j = 2; j < allEvents[i].length; j++) {
                    console.log("allEvents[i][j].id = " + allEvents[i][j].id);

                    let node = new ListNode(allEvents[i][j].id, allEvents[i][j].title + "", allEvents[i][j].descr + "",
                        allEvents[i][j].dueDate + "", allEvents[i][j].prio + "");
                    console.log("node = " + node);
                    document.querySelector("#toDoListDivFinal").appendChild(node);
                }
            }
        }
    }
}


function showToDoList() {
    if (document.querySelector("#toDoListDiv") === null) {
        let content = document.getElementById("content");
        let toDoListDiv = content.appendChild(component("div", "toDoListDiv", "dark", ""));
        toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));
        let addToDo = addToDoBtn(toDoListDiv, "Add a new To Do");
        let toDoListDivFinal = toDoListDiv.appendChild(component("div", "toDoListDivFinal", "", ""));
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
        createToDo(allEvents, id, title, descr, dueDate, prio);
        console.log("createToDo4 -> all Events = " + allEvents);
        toDoCounter++;
        deleteDiv("#addToDo");
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

function editToDoDialog(obj, arr) {
    toggleBlur();
    let div = component("div", "editToDoDiv", "", "");
    let headEdit = component("h3", "", "", "Edit a To Do");
    div.appendChild(headEdit);
    let formEdit = component("form", "editToDo", "", "");


    let editLabelName = component("p", "", "", "Name of To Do");
    let editToDoName = component("input", "editToDoName", "", "");

    let editLabelDescr = component("p", "", "", "Description");
    let editToDoDescr = component("input", "editToDoDescr", "", "");
    editToDoDescr.value = obj.descr;
    let editLabelDate = component("p", "", "", "Date");
    let editToDoDate = component("input", "editToDoDate", "", "");
    editToDoDate.type = "date";
    editToDoDate.value = obj.dueDate;
    let editLabelPrio = component("p", "", "", "Priority");
    let editToDoPrio = component("input", "editToDoPrio", "", "");
    editToDoPrio.value = obj.prio;
    let btnUpdateToDo = component("button", "btnConfirmEditToDo", "", "Update To Do");


    btnUpdateToDo.addEventListener("click", function () {
        let title = document.getElementById("editToDoName").value;
        let descr = document.getElementById("editToDoDescr").value;
        let dueDate = document.getElementById("editToDoDate").value;
        let prio = document.getElementById("editToDoPrio").value;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 2; j < arr[i].length; j++) {
                if (arr[i][j].id == obj.id) {
                    arr[i][j].title = title;
                    arr[i][j].descr = descr;
                    arr[i][j].dueDate = dueDate;
                    arr[i][j].prio = prio;

                }
            }
        }

        deleteDiv("#editToDoDiv");
        updateToDos();

    });
    let btnCancelEditToDo = component("button", "btnCancelToDo", "", "Cancel");
    btnCancelEditToDo.addEventListener("click", function () {
        console.log("btnCancelToDo");
        deleteDiv("#editToDoDiv");
    });
    formEdit.appendChild(editLabelName);
    formEdit.appendChild(editToDoName);
    formEdit.appendChild(editLabelDescr);
    formEdit.appendChild(editToDoDescr);
    formEdit.appendChild(editLabelDate);
    formEdit.appendChild(editToDoDate);
    formEdit.appendChild(editLabelPrio);
    formEdit.appendChild(editToDoPrio);
    div.appendChild(formEdit);
    div.appendChild(btnCancelEditToDo);
    div.appendChild(btnUpdateToDo);
    document.body.appendChild(div);
    let x = document.querySelector("#editToDoName");
    x.value = obj.title;
}

function createToDo(arr, id, title, descr, dueDate, prio) {

    try {
        let activeId = document.querySelector(".active");
        activeId = activeId.id;
        console.log("try activeID = " + activeId);
        activeId = activeId.slice(7);
        console.log("try activeID slice = " + activeId);
        let newToDo = new ToDoItem(id, title, descr, dueDate, prio);
        for (let i = 0; i < arr.length; i++) {
            console.log("arr[i][0] = " + arr[i][0]);
            if (arr[i][0] == activeId) {
                console.log("createToDo arr[i][0] === activeId");
                arr[i].push(newToDo);
            }
        }


    } catch {
        console.log("catch create to do");
        alert("Create a project first!");
    }


}

export {
    showToDoList,
    updateToDos,
    editToDoDialog,
    showAllToDos
}