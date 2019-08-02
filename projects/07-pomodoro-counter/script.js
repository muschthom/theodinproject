let btn = document.getElementsByTagName("button");
let btnArray = Array.prototype.slice.call(btn);

let workTime = 25;
let breakTime = 5;
let countTime = "25:00";

let workTimeDisplay = document.getElementById("workNbr");
workTimeDisplay.innerHTML = workTime.toString();

let breakTimeDisplay = document.getElementById("breakNbr");
breakTimeDisplay.innerHTML = breakTime.toString();

let countDown = document.getElementById("countDown");
countDown.innerHTML = countTime.toString();

btnArray.forEach(function (el) {
    el.addEventListener("click", function (e) {
        let target = e.target.id;
        console.log("target.id " + target);
        switch(target){
            case "play": play(); break;
            case "pause": pause(); break;
            case "stop": stop(); break;
            case "restart": restart(); break;
            case "workUp": workUp(); break;
            case "workDown": workDown(); break;
            case "breakUp": breakUp(); break;
            case "breakDown": breakDown(); break;
        }
    });
    console.log("eventlister aktiv");
});

let play = function () {
    console.log("play");
};

let pause = function () {
    console.log("pause");
};

let stop = function () {
    console.log("stop");
};

let restart = function () {
    console.log("restart");
};

let workUp = function () {
    console.log("workUp");
    workTime++;
    if(workTime >= 99){
        workTime = 99;
    }
    workTimeDisplay.innerHTML = workTime.toString();
    setWorkTime(workTime);

};

let workDown = function () {
    console.log("workDown");
    workTime--;
    if(workTime <= 1){
        workTime = 1;
    }
    workTimeDisplay.innerHTML = workTime.toString();
    setWorkTime(workTime);
};

let breakUp = function () {
    console.log("breakUp");
    breakTime++;
    if(breakTime >= 15){
        breakTime = 15;
    }
    breakTimeDisplay.innerHTML = breakTime.toString();
};

let breakDown = function () {
    console.log("breakDown");
    breakTime--;
    if(breakTime <= 1){
        breakTime = 1;
    }
    breakTimeDisplay.innerHTML = breakTime.toString();
};

let setWorkTime = function (nbr){
    countDown.innerHTML = (nbr + ":00").toString();

}