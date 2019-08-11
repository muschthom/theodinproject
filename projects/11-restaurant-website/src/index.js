import component from "./template";
//import component from "./navContent";
import '../src/styles/app.css';

document.body.style.backgroundImage = "url('../src/img/coffee-984328_1920.jpg')";
let divBG = document.querySelector("#content").appendChild(component("div", ""));
divBG.id = "divBG";
document.querySelector("#content").appendChild(component("h1", "Headline - final???"));
document.querySelector("#content").appendChild(component("p",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
    "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna " +
    "aliquyam erat, sed diam voluptua. At vero eos et accusam et justo " +
    "duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
    "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur"));
let navbar = document.querySelector("#content").appendChild(component("div", ""));
navbar.id = "navbar";

let nav1 = navbar.appendChild(component("div", "Nav1"));
let nav2 = navbar.appendChild(component("div", "Nav2"));
let nav3 = navbar.appendChild(component("div", "Nav3"));
let navContent = navbar.appendChild(component("div", "navContent"));

nav1.classList.add("nav");
nav2.classList.add("nav");
nav3.classList.add("nav");
navContent.classList.add("navContent");

let navBtn = document.querySelectorAll(".nav");
navBtn.forEach(function (el) {
    el.addEventListener("click", function (e) {
        toggleClass(navBtn);

        console.log("click");
        console.log("e = " + e);
        e.target.classList.add("active");
    });
});

let toggleClass = function (list) {
    console.log("toggleClass");
    list.forEach(function (el) {
        console.log("event.target.classList = " + event.target.classList);

        if (event.target.classList.contains("active")) {
            console.log("toggleClass if ");

            el.target.classList.toggle("active");
        }
    })
};

