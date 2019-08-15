import {component, toggleBlur, deleteEntry} from './template';

let allEvents = [];

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
    addBtn(projectDiv);
    console.log("show Projects");
    for (let i = 0; i < allEvents.length; i++) {
        let div = component("div", "project" + i, "project", allEvents[i][0]);
        projectDiv.appendChild(div);

        let btnEdit = component("div", "projectEditBtn" + i, "editBtn","");
        btnEdit.style.background = "url('../src/img/edit.png')";
        btnEdit.style.backgroundSize = "25px 25px";
        btnEdit.addEventListener("click", function () {
            //deleteEntry(this, myLibrary);
            prompt("btnEdit Projekt")
        });

        let btnDelete = component("div", "projectBtnDelete" + i, "deleteBtn","");
        btnDelete.style.background = "url('../src/img/delete.png')";
        btnDelete.style.backgroundSize = "25px 25px";
        btnDelete.addEventListener("click", function () {
            //deleteEntry(this, myLibrary);
            let r = confirm("Do you really want to delete this project with all its to-dos?");
            if (r === true) {
                //delete project
                console.log("delete project");
                //deleteEntry(this, allEvents);

            } else {
                console.log("keep project");
            }
        });
        div.appendChild(btnDelete);
        div.appendChild(btnEdit);
    }
}

function addBtn(parent) {
    let btnAddProject = document.createElement("button");
    btnAddProject.innerHTML = "Add a project/event";
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

function createProject(name) {
    console.log("createProjecct");
    let arr = [];
    arr[0] = name;
    allEvents.push(arr);
    console.table(allEvents);
    deleteDiv("#addProject");
    showProjects();
}

function deleteDiv(selector) {
    console.log("deleteDiv");
    let elem = document.querySelector(selector);
    elem.parentNode.removeChild(elem);
    toggleBlur();

}

export {showProjects, setProjectDiv}