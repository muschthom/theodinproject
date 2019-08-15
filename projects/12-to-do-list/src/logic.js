let allEvents = [];
let projectItems = [];

class ToDoItem {
    constructor(id, title, descr, dueDate, prio) {
        this.id = id;
        this.title = title;
        this.descr = descr;
        this.dueDate = dueDate;
        this.prio = prio;
    }
}

function addProjectToEvents (arr, events){
    events.push(arr);
}

function addToProject (item, projectArr){
    projectArr.push(item);
}

function createProject(name) {
    let arr = [];
    arr[0] = name;
    return arr;
}

export {
    ToDoItem, addToProject, createProject, addProjectToEvents
}
