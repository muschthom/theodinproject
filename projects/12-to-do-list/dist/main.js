!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"body {\r\n    background-color: #333;\r\n    font-family: 'Red Hat Display', sans-serif;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\n\r\n.dark {\r\n    background-color: #333;\r\n    display: inline-grid;\r\n    margin: 1%;\r\n    padding: 15px;\r\n}\r\n\r\n#projectDiv{\r\n    width: 25%;\r\n    min-height: 100px;\r\n}\r\n\r\n#toDoListDiv{\r\n    width: 60%;\r\n    min-height: 100px;\r\n}\r\n\r\n#projectDiv, #toDoListDiv{\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #333;\r\n    color: #555;\r\n    text-align: center;\r\n    border-top: 1px solid #aaa;\r\n}\r\n\r\nfooter a {\r\n    color: #aaaaaa;\r\n}\r\n\r\n.deleteBtn, .editBtn{\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline;\r\n    color: #999999;\r\n    border: none;\r\n    float: right;\r\n}\r\n\r\n.listNode > h3, .inline {\r\n    display: inline;\r\n}\r\n\r\n.listNode {\r\n    background-color: #444;\r\n    padding: 5px;\r\n    margin: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n#addProject, #editProject, #addToDo, #editToDoDiv{\r\n    top: 50px;\r\n    left: 25%;\r\n    position: absolute;\r\n    width: 50%;\r\n    min-height: 200px;\r\n    background-color: #444;\r\n    padding: 20px;\r\n}\r\n\r\nh1, h2 {\r\n    color: #aaa;\r\n}\r\n\r\nbutton  {\r\n    color: #aaa;\r\n    background-color: #222;\r\n    padding: 3px;\r\n    border-radius: 15px;\r\n    border: 1px solid #aaa;\r\n    margin: 3px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: none;\r\n}\r\n\r\n#addProject button, #editProject button {\r\n    margin: 20px;\r\n}\r\n\r\n#projectName {\r\n    display: block;\r\n}\r\n\r\n.blur {\r\n    filter: blur(5px);\r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n}\r\n\r\n.project {\r\n    background-color: #444;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin: 3px;\r\n}\r\n\r\n.active {\r\n    background-color: #123456;\r\n    color: yellow;\r\n}\r\n\r\n#toDoListDiv{\r\n    margin-bottom: 50px;\r\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(l=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var l,d,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var d=e[l];null!=d[0]&&o[d[0]]||(n&&!d[2]?d[2]=n:n&&(d[2]="(".concat(d[2],") and (").concat(n,")")),t.push(d))}},t}},function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};o[l]?o[l].parts.push(d):n.push(o[l]={id:l,parts:[d]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],l=0;if(i){for(i.refs++;l<i.parts.length;l++)i.parts[l](o.parts[l]);for(;l<o.parts.length;l++)i.parts.push(g(o.parts[l],t))}else{for(var d=[];l<o.parts.length;l++)d.push(g(o.parts[l],t));r[o.id]={id:o.id,refs:1,parts:d}}}}function a(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var r=l(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}var h=null,f=0;function g(e,t){var n,o,r;if(t.singleton){var i=f++;n=h||(h=a(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=a(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var l=n[i],a=r[l.id];a&&(a.refs--,o.push(a))}e&&c(d(e,t),t);for(var s=0;s<o.length;s++){var p=o[s];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete r[p.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);let o=0;class r{constructor(e,t,n,o,r){this.id=e,this.title=t,this.descr=n,this.dueDate=o,this.prio=r}}function i(){if(u!==[]){let e=document.querySelector("#toDoListDivFinal");try{for(;e.hasChildNodes();)e.removeChild(e.lastChild)}catch{console.log("catch")}try{let e=document.querySelector(".active");e=(e=e.id).slice(7),console.log("try activeID slice in updateToDos = "+e);for(let t=0;t<u.length;t++)if(u[t][0]==e)for(let e=2;e<u[t].length;e++){let n=new a(u[t][e].id,u[t][e].title+"",u[t][e].descr+"",u[t][e].dueDate+"",u[t][e].prio+"");console.log("node = "+n),document.querySelector("#toDoListDivFinal").appendChild(n)}}catch{console.log("catch update to do");for(let e=0;e<u.length;e++)for(let t=2;t<u[e].length;t++){console.log("allEvents[i][j].id = "+u[e][t].id);let n=new a(u[e][t].id,u[e][t].title+"",u[e][t].descr+"",u[e][t].dueDate+"",u[e][t].prio+"");console.log("node = "+n),document.querySelector("#toDoListDivFinal").appendChild(n)}}}}function l(){if(null===document.querySelector("#toDoListDiv")){let e=document.getElementById("content").appendChild(c("div","toDoListDiv","dark",""));e.appendChild(c("h2","","","Project ToDos"));(function(e,t){let n=document.createElement("button");n.innerHTML=t,n.addEventListener("click",function(){console.log("btnAddToDo"),function(){let e=c("div","addToDo","",""),t=c("h3","","","Create a To Do");e.appendChild(t);let n=c("form","createToDo","",""),l=c("p","","","Name of To Do"),d=c("input","toDoName","",""),a=c("p","","","Description"),s=c("input","toDoDescr","",""),h=c("p","","","Date"),f=c("input","toDoDate","","");f.type="date";let g=c("p","","","Priority"),m=c("input","toDoPrio","",""),v=c("button","btnCreateToDo","","Create To Do");v.addEventListener("click",function(){let e=o,t=document.getElementById("toDoName").value,n=document.getElementById("toDoDescr").value,l=document.getElementById("toDoDate").value,d=document.getElementById("toDoPrio").value;console.log("create To Do: id = "+e+" : title = "+t+" ; descr = "+n+" dueDate = "+l+" prio = "+d),function(e,t,n,o,i,l){try{let d=document.querySelector(".active");d=d.id,console.log("try activeID = "+d),d=d.slice(7),console.log("try activeID slice = "+d);let c=new r(t,n,o,i,l);for(let t=0;t<e.length;t++)console.log("arr[i][0] = "+e[t][0]),e[t][0]==d&&(console.log("createToDo arr[i][0] === activeId"),e[t].push(c))}catch{console.log("catch create to do"),alert("Create a project first!")}}(u,e,t,n,l,d),console.log("createToDo4 -> all Events = "+u),o++,p("#addToDo"),i()});let b=c("button","btnCancelToDo","","Cancel");b.addEventListener("click",function(){console.log("btnCancelToDo"),p("#addToDo")}),n.appendChild(l),n.appendChild(d),n.appendChild(a),n.appendChild(s),n.appendChild(h),n.appendChild(f),n.appendChild(g),n.appendChild(m),e.appendChild(n),e.appendChild(b),e.appendChild(v),document.body.appendChild(e)}(),s()}),e.appendChild(n)})(e,"Add a new ToDo"),e.appendChild(c("div","toDoListDivFinal","",""))}}function d(e,t){s();let n=c("div","editToDoDiv","",""),o=c("h3","","","Edit a To Do");n.appendChild(o);let r=c("form","editToDo","",""),l=c("p","","","Name of To Do"),d=c("input","editToDoName","",""),a=c("p","","","Description"),u=c("input","editToDoDescr","","");u.value=e.descr;let h=c("p","","","Date"),f=c("input","editToDoDate","","");f.type="date",f.value=e.dueDate;let g=c("p","","","Priority"),m=c("input","editToDoPrio","","");m.value=e.prio;let v=c("button","btnConfirmEditToDo","","Update To Do");v.addEventListener("click",function(){let n=document.getElementById("editToDoName").value,o=document.getElementById("editToDoDescr").value,r=document.getElementById("editToDoDate").value,l=document.getElementById("editToDoPrio").value;for(let i=0;i<t.length;i++)for(let d=2;d<t[i].length;d++)t[i][d].id==e.id&&(t[i][d].title=n,t[i][d].descr=o,t[i][d].dueDate=r,t[i][d].prio=l);p("#editToDoDiv"),i()});let b=c("button","btnCancelToDo","","Cancel");b.addEventListener("click",function(){console.log("btnCancelToDo"),p("#editToDoDiv")}),r.appendChild(l),r.appendChild(d),r.appendChild(a),r.appendChild(u),r.appendChild(h),r.appendChild(f),r.appendChild(g),r.appendChild(m),n.appendChild(r),n.appendChild(b),n.appendChild(v),document.body.appendChild(n),document.querySelector("#editToDoName").value=e.title}function c(e,t,n,o){const r=document.createElement(e);return""!==t&&(r.id=t),""!==n&&r.classList.add(n),""!==o&&(r.innerHTML=o),r}function a(e,t,n,o,r){const l=document.createElement("div"),c=document.createElement("h3"),a=document.createElement("p"),s=document.createElement("p"),p=document.createElement("p");let h=document.createElement("button"),f=document.createElement("button");return l.id=e,l.classList.add("listNode"),c.innerHTML=t+"",a.innerHTML=n+"",s.innerHTML=o+"",p.innerHTML=r+"",h.innerHTML="",h.setAttribute("id","editToDo"+e),h.setAttribute("class","inline"),h.setAttribute("class","editBtn"),h.style.background="url('../src/img/edit.png')",h.style.backgroundSize="25px 25px",h.addEventListener("click",function(){!function(e,t){let n=e.id;n=n.slice(8),console.log("editToDo id = "+n);for(let e=0;e<t.length;e++)for(let o=2;o<t[e].length;o++)if(t[e][o].id==n){d(t[e][o],u)}}(this,u)}),f.innerHTML="",f.setAttribute("id","deleteToDo"+e),f.setAttribute("class","inline"),f.setAttribute("class","deleteBtn"),f.style.background="url('../src/img/delete.png')",f.style.backgroundSize="25px 25px",f.addEventListener("click",function(){!0===confirm("Do you really want to delete this to-do?")&&function(e,t){let n=e.id;n=n.slice(10);for(let e=0;e<t.length;e++)for(let o=2;o<t[e].length;o++)t[e][o].id==n&&(console.log("position = "+e),t[e].splice(o,1),console.log("to do deleted"));i()}(this,u)}),l.appendChild(c),l.appendChild(f),l.appendChild(h),l.appendChild(a),l.appendChild(s),l.appendChild(p),l}let s=function(){document.getElementById("content").classList.toggle("blur")};function p(e){console.log("deleteDiv");let t=document.querySelector(e);t.parentNode.removeChild(t),s()}let u=[],h=0;function f(){let e=document.getElementById("projectDiv");try{for(;e.hasChildNodes();)e.removeChild(e.lastChild)}catch{console.log("catch")}e.appendChild(c("h2","","","Projects/Events")),function(e,t){let n=document.createElement("button");n.innerHTML=t,n.addEventListener("click",function(){console.log("btnAddProject"),function(){let e=c("div","addProject","",""),t=c("h3","","","Create a new project");e.appendChild(t);let n=c("form","createProject","",""),o=c("p","","","Name of project"),r=c("input","projectName","",""),i=c("button","btnCreateProject","","Create Project");i.addEventListener("click",function(){!function(e){console.log("createProjecct");let t=[];t[0]=h,t[1]=e,u.push(t),console.table(u),p("#addProject"),f(),h++,console.log("projectId")}(document.getElementById("projectName").value)});let l=c("button","btnCancelProject","","Cancel");l.addEventListener("click",function(){p("#addProject")}),n.appendChild(o),n.appendChild(r),e.appendChild(n),e.appendChild(l),e.appendChild(i),document.body.appendChild(e)}(),s()}),e.appendChild(n)}(e,"Add a project/event"),console.log("show Projects");let t=c("div","allProjects","project","Show all To Dos");e.appendChild(t),t.addEventListener("click",function(){console.log("showAllToDos"),function(){for(;toDoListDivFinal.hasChildNodes();)toDoListDivFinal.removeChild(toDoListDivFinal.lastChild);for(let e=0;e<u.length;e++)for(let t=2;t<u[e].length;t++){console.log("allEvents[i][j].id = "+u[e][t].id);let n=new a(u[e][t].id,u[e][t].title+"",u[e][t].descr+"",u[e][t].dueDate+"",u[e][t].prio+"");console.log("node = "+n),document.querySelector("#toDoListDivFinal").appendChild(n)}}()});for(let t=0;t<u.length;t++){let n=c("div","project"+u[t][0],"project",u[t][1]);t===u.length-1&&n.classList.add("active"),e.appendChild(n);let o=c("div","pEditbtn"+u[t][0],"editBtn","");o.style.background="url('../src/img/edit.png')",o.style.backgroundSize="25px 25px",o.addEventListener("click",function(){g(this,u),s()});let r=c("div","pDeleteBtn"+u[t][0],"deleteBtn","");r.style.background="url('../src/img/delete.png')",r.style.backgroundSize="25px 25px",r.addEventListener("click",function(){!0===confirm("Do you really want to delete this project with all its to-dos?")?(console.log("delete project"),m(this,u)):console.log("keep project")}),n.appendChild(r),n.appendChild(o),n.addEventListener("click",function(e){let t=e.target;document.querySelectorAll(".project").forEach(function(e){e.classList.contains("active")&&(console.log("toggleClass if "),e.classList.toggle("active"))}),t.classList.add("active"),i()})}}function g(e,t){let n,o,r=c("div","editProject","",""),i=c("h3","","","Edit project"),l=c("form","editProjectForm","",""),d=c("p","","","Name of project"),a=e.id;console.log("e = "+e),console.log("e.id = "+e.id),a=a.slice(8),console.log("id = "+a);for(let e=0;e<t.length;e++)t[e][0]==a&&(n=t[e][1],o=e);let s=c("input","projectNameEdit","","");s.value=n;let h=c("button","btnConfirmEditProject","","Edit Project");h.addEventListener("click",function(){let e=document.getElementById("projectNameEdit").value;!function(e,t,n){e[t][1]=n,console.table(u),p("#editProject"),f()}(u,o,e)});let g=c("button","btnCancelEditProject","","Cancel");g.addEventListener("click",function(){p("#editProject")}),r.appendChild(i),l.appendChild(d),l.appendChild(s),r.appendChild(l),r.appendChild(g),r.appendChild(h),document.body.appendChild(r)}function m(e,t){console.log("e = "+e),console.log("e.id = "+e.id);let n=e.id;n=n.slice(10);for(let e=0;e<t.length;e++)console.log("arr[i][1] = "+t[e][0]+" ; id = "+n),t[e][0]==n&&(console.log("position = "+e),t.splice(e,1),console.log("project deleted"));f()}!function(){document.getElementById("content").appendChild(c("h1","","","My ToDo List App"));try{document.getElementById("content").appendChild(c("div","projectDiv","dark","")),f(),l()}catch{console.log("error")}!function(){let e=c("footer","","",""),t=c("p","","",'Credits: icons: <a href="https://pixabay.com/illustrations/icon-symbol-design-direction-web-2426370/">edit</a> and <a href="https://pixabay.com/illustrations/icon-contact-flat-web-business-2457965/">delete</a> by <a href="https://pixabay.com/users/designer_akhil-5684940/">designer_akhil</a>.');document.body.appendChild(e),e.appendChild(t)}()}()}]);