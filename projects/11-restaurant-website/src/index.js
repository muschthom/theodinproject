import component from "./template";
import navContent1 from "./navContent1";
import navContent2 from "./navContent2";
import navContent3 from "./navContent3";
import '../src/styles/app.css';


//set bg-img
document.body.style.backgroundImage = "url('../src/img/coffee-984328_1920.jpg')";
let divBG = document.querySelector("#content").appendChild(component("div", ""));
divBG.id = "divBG";

//add h1 and p
document.querySelector("#content").appendChild(component("h1", "Headline"));
document.querySelector("#content").appendChild(component("p",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
    "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna " +
    "aliquyam erat, sed diam voluptua. At vero eos et accusam et justo " +
    "duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
    "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur"));

//add navbar
let navbar = document.querySelector("#content").appendChild(component("div", ""));
navbar.id = "navbar";

//add navbar elements and classes
let nav1 = navbar.appendChild(component("div", "Nav1"));
let nav2 = navbar.appendChild(component("div", "Nav2"));
let nav3 = navbar.appendChild(component("div", "Nav3"));
let navContent = navbar.appendChild(component("div", ""));

nav1.classList.add("nav");
nav1.classList.add("1");
nav2.classList.add("nav");
nav2.classList.add("2");
nav3.classList.add("nav");
nav3.classList.add("3");

navContent.classList.add("navContentTop");
navContent.appendChild(navContent1());
navContent.appendChild(navContent2());
navContent.appendChild(navContent3());


//select all nav-btns
let navBtn = document.querySelectorAll(".nav");
let myClass;

//click logic
navBtn.forEach(function (el) {
    el.addEventListener("click", function (e) {
        let clickedBtn = e.target;
        //get class of clicked btn
        myClass = clickedBtn.classList;

        toggleClass(navBtn);
        clickedBtn.classList.add("active");
        console.log("clickedBtn.classList = " + clickedBtn.classList);
        console.log("myClass = clickedBtn.classList = " + myClass);

    });
});


//display logic
let toggleClass = function (list) {
    console.log("toggleClass");
    list.forEach(function (e) {
        if (e.classList.contains("active")) {
            console.log("toggleClass if ");
            e.classList.toggle("active");
        }
    });

    if (myClass.contains("1")) {
        let a = document.querySelector(".one");
        a.classList.remove("invisible");
        document.querySelector(".two").classList.add("invisible");
        document.querySelector(".three").classList.add("invisible");
    }
    if (myClass.contains("2")) {
        document.querySelector(".one").classList.add("invisible");
        document.querySelector(".two").classList.remove("invisible");
        document.querySelector(".three").classList.add("invisible");
    }
    if (myClass.contains("3")) {
        document.querySelector(".one").classList.add("invisible");
        document.querySelector(".two").classList.add("invisible");
        document.querySelector(".three").classList.remove("invisible");
    }
};

