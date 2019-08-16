import {component, toggleBlur, deleteDiv} from './template';

let allEvents = [];
let projectId = 0;

function setProjectDiv() {
    let content = document.getElementById("content");
    let projectDiv = content.appendChild(component("div", "projectDiv", "dark", ""));
}

function showProjects() {
    let projectDiv = document.getElementById("projectDiv");
    try {
        while (projectDiv.hasChildNodes()) {
            projectDiv.removeChild(projectDiv.lastChild);
        }
    } catch {
        console.log("catch");
    }

    projectDiv.appendChild(component("h2", "", "", "Projects/Events"));

    //add Button to add new projects
    addBtn(projectDiv, "Add a project/event");
    console.log("show Projects");
    for (let i = 0; i < allEvents.length; i++) {
        let div = component("div", "project" + allEvents[i][0], "project", allEvents[i][1]);
        projectDiv.appendChild(div);

        let btnEdit = component("div", "pEditbtn" + allEvents[i][0], "editBtn", "");
        btnEdit.style.background = "url('../src/img/edit.png')";
        btnEdit.style.backgroundSize = "25px 25px";
        btnEdit.addEventListener("click", function () {
            //deleteEntry(this, myLibrary);
            editProjectDialog(this, allEvents);
            toggleBlur();

        });

        let btnDelete = component("div", "pDeleteBtn" + allEvents[i][0], "deleteBtn", "");
        btnDelete.style.background = "url('../src/img/delete.png')";
        btnDelete.style.backgroundSize = "25px 25px";
        btnDelete.addEventListener("click", function () {
            //deleteEntry(this, myLibrary);
            let r = confirm("Do you really want to delete this project with all its to-dos?");
            if (r === true) {
                //delete project
                console.log("delete project");
                deleteProject(this, allEvents);

            } else {
                console.log("keep project");
            }
        });
        div.appendChild(btnDelete);
        div.appendChild(btnEdit);
    }
}

function addBtn(parent, content) {
    let btnAddProject = document.createElement("button");
    btnAddProject.innerHTML = content;
        //"Add a project/event";
    btnAddProject.addEventListener("click", function () {
        console.log("btnAddProject");
        addProjectDialog();
        toggleBlur();
    });
    parent.appendChild(btnAddProject);
}

function addProjectDialog() {
    let div = component("div", "addProject", "", "");
    let head = component("h3", "", "", "Create a new project");
    div.appendChild(head);
    let form = component("form", "createProject", "", "");
    let label = component("p", "", "", "Name of project");
    let projectName = component("input", "projectName", "", "");
    let btnCreateProject = component("button", "btnCreateProject", "", "Create Project");
    btnCreateProject.addEventListener("click", function () {
        let name = document.getElementById("projectName").value;
        createProject(name);
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

function editProjectDialog(e, arr) {
    let div = component("div", "editProject", "", "");
    let head = component("h3", "", "", "Edit project");
    let form = component("form", "editProjectForm", "", "");
    let label = component("p", "", "", "Name of project");
    let id = e.id;
    console.log("e = " + e);
    console.log("e.id = " + e.id);
    id = id.slice(8);
    console.log("id = " + id);
    let projectName, arrPosition;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == id) {
            projectName = arr[i][1];
            arrPosition = i;
        }
    }
    let input = component("input", "projectNameEdit", "", "");
    input.value = projectName;
    let btnConfirmEditProject = component("button", "btnConfirmEditProject", "", "Edit Project");
    btnConfirmEditProject.addEventListener("click", function () {
        let name = document.getElementById("projectNameEdit").value;
        editProject(allEvents, arrPosition, name);
    });
    let btnCancelEditProject = component("button", "btnCancelEditProject", "", "Cancel");
    btnCancelEditProject.addEventListener("click", function () {
        deleteDiv("#editProject");
    });


    div.appendChild(head);
    form.appendChild(label);
    form.appendChild(input);
    div.appendChild(form);
    div.appendChild(btnCancelEditProject);
    div.appendChild(btnConfirmEditProject);
    document.body.appendChild(div);
}

function createProject(name) {
    console.log("createProjecct");
    let arr = [];
    arr[0] = projectId;
    arr[1] = name;
    allEvents.push(arr);
    console.table(allEvents);
    deleteDiv("#addProject");
    showProjects();
    projectId++;
    console.log("projectId");
}

function editProject(arr, id, name) {
    arr[id][1] = name;
    console.table(allEvents);
    deleteDiv("#editProject");
    //toggleBlur();
    showProjects();
}



function deleteProject(e, arr) {
    console.log("e = " + e);
    console.log("e.id = " + e.id);
    let id = e.id;
    id = id.slice(10);
    //search for id in data
    for (let i = 0; i < arr.length; i++) {
        //if id found, remove this element
        console.log("arr[i][1] = " + arr[i][0] + " ; id = " + id);
        if (arr[i][0] == id) {
            console.log("position = " + i);
            arr.splice(i, 1);
            console.log("project deleted");
        }
    }
    showProjects();
}

export {showProjects, setProjectDiv, allEvents}