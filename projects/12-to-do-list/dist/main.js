!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);let o=0;function r(e,t,n,o){const r=document.createElement(e);return""!==t&&(r.id=t),""!==n&&r.classList.add(n),""!==o&&(r.innerHTML=o),r}let i=function(){document.getElementById("content").classList.toggle("blur")},c=[],d=0;function l(){let e=document.getElementById("projectDiv");try{for(;e.hasChildNodes();)e.removeChild(e.lastChild)}catch{console.log("catch")}e.appendChild(r("h2","","","Projects/Events")),function(e,t){let n=document.createElement("button");n.innerHTML=t,n.addEventListener("click",function(){console.log("btnAddProject"),function(){let e=r("div","addProject","",""),t=r("h3","","","Create a new project");e.appendChild(t);let n=r("form","createProject","",""),o=r("p","","","Name of project"),i=r("input","projectName","",""),a=r("button","btnCreateProject","","Create Project");a.addEventListener("click",function(){!function(e){console.log("createProjecct");let t=[];t[0]=d,t[1]=e,c.push(t),console.table(c),s("#addProject"),l(),d++,console.log("projectId")}(document.getElementById("projectName").value)});let u=r("button","btnCancelProject","","Cancel");u.addEventListener("click",function(){s("#addProject")}),n.appendChild(o),n.appendChild(i),e.appendChild(n),e.appendChild(u),e.appendChild(a),document.body.appendChild(e)}(),i()}),e.appendChild(n)}(e,"Add a project/event"),console.log("show Projects");for(let t=0;t<c.length;t++){let n=r("div","project"+c[t][0],"project",c[t][1]);e.appendChild(n);let o=r("div","pEditbtn"+c[t][0],"editBtn","");o.style.background="url('../src/img/edit.png')",o.style.backgroundSize="25px 25px",o.addEventListener("click",function(){a(this,c),i()});let d=r("div","pDeleteBtn"+c[t][0],"deleteBtn","");d.style.background="url('../src/img/delete.png')",d.style.backgroundSize="25px 25px",d.addEventListener("click",function(){!0===confirm("Do you really want to delete this project with all its to-dos?")?(console.log("delete project"),u(this,c)):console.log("keep project")}),n.appendChild(d),n.appendChild(o)}}function a(e,t){let n,o,i=r("div","editProject","",""),d=r("h3","","","Edit project"),a=r("form","editProjectForm","",""),u=r("p","","","Name of project"),p=e.id;console.log("e = "+e),console.log("e.id = "+e.id),p=p.slice(8),console.log("id = "+p);for(let e=0;e<t.length;e++)t[e][0]==p&&(n=t[e][1],o=e);let f=r("input","projectNameEdit","","");f.value=n;let h=r("button","btnConfirmEditProject","","Edit Project");h.addEventListener("click",function(){let e=document.getElementById("projectNameEdit").value;!function(e,t,n){e[t][1]=n,console.table(c),s("#editProject"),l()}(c,o,e)});let m=r("button","btnCancelEditProject","","Cancel");m.addEventListener("click",function(){s("#editProject")}),i.appendChild(d),a.appendChild(u),a.appendChild(f),i.appendChild(a),i.appendChild(m),i.appendChild(h),document.body.appendChild(i)}function s(e){console.log("deleteDiv");let t=document.querySelector(e);t.parentNode.removeChild(t),i()}function u(e,t){console.log("e = "+e),console.log("e.id = "+e.id);let n=e.id;n=n.slice(10);for(let e=0;e<t.length;e++)console.log("arr[i][1] = "+t[e][0]+" ; id = "+n),t[e][0]==n&&(console.log("position = "+e),t.splice(e,1),console.log("project deleted"));l()}let p=new class{constructor(e,t,n,o,r){this.id=e,this.title=t,this.descr=n,this.dueDate=o,this.prio=r}}("1","title","desc","dueDate","prio");console.table(p),console.log(p);let f=new function(e,t,n,r,i){const c=document.createElement("div"),d=document.createElement("h3"),l=document.createElement("p"),a=document.createElement("p");document.createElement("img");let s=document.createElement("button"),u=document.createElement("button");return c.id=o,c.classList.add("listNode"),d.innerHTML=t,l.innerHTML=n,a.innerHTML=r,s.innerHTML="",s.setAttribute("id",e),s.setAttribute("class","inline"),s.setAttribute("class","editBtn"),s.style.background="url('../src/img/edit.png')",s.style.backgroundSize="25px 25px",s.addEventListener("click",function(){}),u.innerHTML="",u.setAttribute("id",e),u.setAttribute("class","inline"),u.setAttribute("class","deleteBtn"),u.style.background="url('../src/img/delete.png')",u.style.backgroundSize="25px 25px",u.addEventListener("click",function(){}),c.appendChild(d),c.appendChild(u),c.appendChild(s),c.appendChild(l),c.appendChild(a),o++,c}(p.id,p.title,p.descr,p.dueDate,p.prio);function h(){let e=document.getElementById("content").appendChild(r("div","toDoListDiv","dark",""));e.appendChild(r("h2","","","Headline Project-To-Dos")),function(e,t){document.createElement("button").innerHTML=t,btnAddProject.addEventListener("click",function(){console.log("btnAddToDo"),function(){let e=r("div","addToDo","",""),t=r("h3","","","Create a To Do");e.appendChild(t);let n=r("form","createToDo","","");r("p","","","Name of To Do"),r("input","toDoName","",""),r("p","","","Name of To Do"),r("input","toDoName","",""),r("p","","","Name of To Do"),r("input","toDoName","",""),r("p","","","Name of To Do"),r("input","toDoName","","");r("button","btnCreateToDo","","Create To Do").addEventListener("click",function(){});let o=r("button","btnCancelProject","","Cancel");o.addEventListener("click",function(){deleteDiv("#addProject")}),n.appendChild(label),n.appendChild(projectName),e.appendChild(n),e.appendChild(o),e.appendChild(btnCreateProject),document.body.appendChild(e)}(),i()}),e.appendChild(btnAddProject)}(e,"Add a new To Do").addEventListener("click",function(){var e;e=f,c[0].push(e)}),console.log("showToDoList")}document.getElementById("content").appendChild(r("h1","","","My To-Do-List-App")),document.getElementById("content").appendChild(r("div","projectDiv","dark","")),l(),h(),function(){let e=r("footer","","",'Credits: icons: <a href="https://pixabay.com/illustrations/icon-symbol-design-direction-web-2426370/">edit</a> and <a href="https://pixabay.com/illustrations/icon-contact-flat-web-business-2457965/">delete</a> by <a href="https://pixabay.com/users/designer_akhil-5684940/">designer_akhil</a>.');document.body.appendChild(e)}()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"body {\r\n    background-color: #777;\r\n    font-family: 'Red Hat Display', sans-serif;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\n\r\n.dark {\r\n    background-color: #333;\r\n    display: inline-grid;\r\n    margin: 1%;\r\n    padding: 15px;\r\n}\r\n\r\n#projectDiv{\r\n    width: 25%;\r\n    min-height: 100px;\r\n}\r\n\r\n#toDoListDiv{\r\n    width: 60%;\r\n    min-height: 100px;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #777;\r\n    color: #555;\r\n    text-align: center;\r\n}\r\n\r\n.deleteBtn, .editBtn{\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline;\r\n    color: #999999;\r\n    border: none;\r\n    float: right;\r\n}\r\n\r\n.listNode > h3, .inline {\r\n    display: inline;\r\n}\r\n\r\n.listNode {\r\n    background-color: #555;\r\n}\r\n\r\n#addProject, #editProject{\r\n    top: 50px;\r\n    left: 25%;\r\n    position: absolute;\r\n    width: 50%;\r\n    height: 200px;\r\n    background-color: #444;\r\n    padding: 20px;\r\n}\r\n\r\n#addProject button, #editProject button {\r\n    margin: 20px;\r\n}\r\n\r\n#projectName {\r\n    display: block;\r\n}\r\n\r\n.blur {\r\n    filter: blur(5px);\r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n}\r\n\r\n#projectDiv > div {\r\n    background-color: #444;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin: 3px;\r\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var c,d,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=e[c];null!=d[0]&&o[d[0]]||(n&&!d[2]?d[2]=n:n&&(d[2]="(".concat(d[2],") and (").concat(n,")")),t.push(d))}},t}},function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};o[c]?o[c].parts.push(d):n.push(o[c]={id:c,parts:[d]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],c=0;if(i){for(i.refs++;c<i.parts.length;c++)i.parts[c](o.parts[c]);for(;c<o.parts.length;c++)i.parts.push(m(o.parts[c],t))}else{for(var d=[];c<o.parts.length;c++)d.push(m(o.parts[c],t));r[o.id]={id:o.id,refs:1,parts:d}}}}function a(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var r=c(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}var f=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=f||(f=a(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=a(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var c=n[i],a=r[c.id];a&&(a.refs--,o.push(a))}e&&l(d(e,t),t);for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}}]);