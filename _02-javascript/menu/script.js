let main = document.querySelector(".main");

let div = document.createElement("div");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
let li6 = document.createElement("li");


div.innerHTML = "Hover Menu";
li1.innerHTML = "Sub Menu 1";
li2.innerHTML = "Sub Menu 2";
li3.innerHTML = "Sub Menu 3";
li4.innerHTML = "Sub Menu 4";
li5.innerHTML = "Sub Menu 5";
li6.innerHTML = "Sub Menu 6";

ul.classList.add("invisible");
ul.classList.add("ul1");

main.appendChild(div);
div.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

div.addEventListener("mouseover", function () {
    ul.classList.toggle("invisible");
});

div.addEventListener("mouseout", function () {
    ul.classList.toggle("invisible");
});

let div2 = document.createElement("div");
let ul2 = document.createElement("ul");
let li21 = document.createElement("li");
let li22 = document.createElement("li");
let li23 = document.createElement("li");
let li24 = document.createElement("li");
let li25 = document.createElement("li");
let li26 = document.createElement("li");


div2.innerHTML = "Click Menu";
li21.innerHTML = "Sub Menu 21";
li22.innerHTML = "Sub Menu 22";
li23.innerHTML = "Sub Menu 23";
li24.innerHTML = "Sub Menu 24";
li25.innerHTML = "Sub Menu 25";
li26.innerHTML = "Sub Menu 26";

ul2.classList.add("move");

main.appendChild(div2);
div2.appendChild(ul2);
ul2.classList.add("ul2");
ul2.appendChild(li21);
ul2.appendChild(li22);
ul2.appendChild(li23);
ul2.appendChild(li24);
ul2.appendChild(li25);
ul2.appendChild(li26);

div2.addEventListener("click", function () {
    ul2.classList.toggle("move");
});

