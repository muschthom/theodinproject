// import functions
import '../src/styles/app.css';

import {showProjects} from './projectDiv';
import {showToDoList} from './toDoListDiv';
import {component, ListNode} from './template';
function run() {
    let content = document.getElementById("content");
    content.appendChild(component("h1", "", "", "My To-Do-List-App"));
    showProjects();
    showToDoList();
    showFooter();
}
run();




function showFooter(){
    let footerCont = 'Credits: ' +
        'icons: <a href="https://pixabay.com/illustrations/icon-symbol-design-direction-web-2426370/">edit</a> ' +
        'and <a href="https://pixabay.com/illustrations/icon-contact-flat-web-business-2457965/">delete</a> ' +
        'by <a href="https://pixabay.com/users/designer_akhil-5684940/">designer_akhil</a>.';
    let footer = component("footer", "", "", footerCont);
    document.body.appendChild(footer);
}