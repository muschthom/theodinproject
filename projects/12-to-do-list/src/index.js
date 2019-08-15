// import your function
import '../src/styles/app.css';
import {component, ListNode} from './template';
import {ToDoItem, addProjectToEvents, addToProject, createProject} from './logic';

let allEvents = [];
let h1 = document.body.appendChild(component("h1", "", "", "My To-Do-List-App"));

let projectDiv = document.body.appendChild(component("div", "projectDiv", "dark", ""));
let toDoListDiv = document.body.appendChild(component("div", "toDoListDiv", "dark", ""));

let x = new ToDoItem("1", "title", "desc", "dueDate", "prio");
console.table(x);
console.log(x);
projectDiv.appendChild(component("h2", "", "", "Projects/Events"));
toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));


let arr1 = createProject("project 1");
let arr2 = createProject("project 2");
addToProject(x, arr1);
addToProject(x, arr2);

addProjectToEvents(arr1, allEvents);
addProjectToEvents(arr2, allEvents);

showProjects(allEvents);

function showProjects(allProjects){
    for(let i = 0; i<allProjects.length; i++){
        console.log("name = " + allProjects[i][0]);
        projectDiv.appendChild(component("div", "proj" + i, "", ""+ allProjects[i][0]));
    }
}
let node = new ListNode(x.id, x.title, x.descr, x.dueDate, x.prio);

toDoListDiv.appendChild(node);









let footerCont = 'Credits: ' +
    'icons: <a href="https://pixabay.com/illustrations/icon-symbol-design-direction-web-2426370/">edit</a> ' +
    'and <a href="https://pixabay.com/illustrations/icon-contact-flat-web-business-2457965/">delete</a> ' +
    'by <a href="https://pixabay.com/users/designer_akhil-5684940/">designer_akhil</a>.';

let footer = component("footer", "", "", footerCont);
document.body.appendChild(footer);