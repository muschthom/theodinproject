import {component} from './template';

/*

let x = new ToDoItem("1", "title", "desc", "dueDate", "prio");
console.table(x);
console.log(x);

let node = new ListNode(x.id, x.title, x.descr, x.dueDate, x.prio);

function addToProject (item, projectArr){
    projectArr.push(item);
}

 */

function showToDoList(){
    let content = document.getElementById("content");
    let toDoListDiv = content.appendChild(component("div", "toDoListDiv", "dark", ""));
    toDoListDiv.appendChild(component("h2", "", "", "Headline Project-To-Dos"));
    console.log("showToDoList");
    //toDoListDiv.appendChild(node);
}


export {
    showToDoList
}