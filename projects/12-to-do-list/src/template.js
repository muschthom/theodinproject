let counter = 0;

function component(type, id, classes, content) {
    const element = document.createElement(type);

    if(id!=="") {
        element.id = id;
    }

    if(classes!=="") {
        element.classList.add(classes);
    }

    if(content!=="") {
        element.innerHTML = content;
    }
    return element;
}

function ListNode(id, title, descr, dueDate, prio){
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
        //deleteEntry(this, myLibrary);
    });

    btnDelete.innerHTML = "";
    btnDelete.setAttribute("id", "deleteToDo" + id);
    btnDelete.setAttribute("class", "inline");
    btnDelete.setAttribute("class", "deleteBtn");
    btnDelete.style.background = "url('../src/img/delete.png')";
    btnDelete.style.backgroundSize = "25px 25px";
    btnDelete.addEventListener("click", function () {
        //deleteEntry(this, myLibrary);
    });

    console.log("ok1");
    div.appendChild(header);
    console.log("ok2");

    div.appendChild(btnDelete);
    console.log("ok3");

    div.appendChild(btnEdit);
    console.log("ok4");

    div.appendChild(para);
    console.log("ok5");

    div.appendChild(date);
    console.log("ok6");

    div.appendChild(prior);
    console.log("ok7");


    counter++;

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



export {
    component,
    ListNode,
    toggleBlur,
    deleteDiv
}
