let btn = document.getElementsByTagName("button");
let btnArray = Array.prototype.slice.call(btn);

let workTime = 25;
let breakTime = 5;
let countTime = "25:00";
let min = 25;
let sec = 0;
let operating;

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
        switch (target) {
            case "play":
                play();
                break;
            case "pause":
                pause();
                break;
            case "stop":
                stop();
                break;
            case "restart":
                restart();
                break;
            case "workUp":
                workUp();
                break;
            case "workDown":
                workDown();
                break;
            case "breakUp":
                breakUp();
                break;
            case "breakDown":
                breakDown();
                break;
        }
    });
    console.log("eventlister aktiv");
});


let operate = function (a, b) {
    let min = a;
    if (b === 0) {
        b = 59;
    }
    let sec = b;
    let timer = setInterval(function () {
        let val = getVal();

        if (sec === 59) {
            min -= 1;
        }
        if (sec < 10) {
            countDown.innerHTML = min + ":0" + sec;
        } else {
            countDown.innerHTML = min + ":" + sec;
        }
        if (sec < 0 && min === 0 || val === false) {
            clearInterval(timer);
            return false;
        } else if (sec < 0) {
            sec = 59;
        }
        sec--;

    }, 1000);
    return true;
};

let getCurrentTime = function () {
    let currentVal = countDown.innerHTML;
    let arr = currentVal.split(":");
    return arr;
};

let getVal = function () {
    return operating;
}

let play = function () {
    let valArr = getCurrentTime();
    console.log("play");
    min = valArr[0] * 1;
    sec = valArr[1] * 1;
    console.log("min = " + min + " sec = " + sec);
    operating = true;
    if (operate !== true) {
        operate(min, sec);
    }
    document.getElementById("play").disabled = true;
    document.getElementById("pause").disabled = false;

};

let pause = function () {
    console.log("pause");
    operating = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("play").disabled = false;
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
    if (workTime >= 99) {
        workTime = 99;
    }
    workTimeDisplay.innerHTML = workTime.toString();
    setWorkTime(workTime);

};

let workDown = function () {
    console.log("workDown");
    workTime--;
    if (workTime <= 1) {
        workTime = 1;
    }
    workTimeDisplay.innerHTML = workTime.toString();
    setWorkTime(workTime);
};

let breakUp = function () {
    console.log("breakUp");
    breakTime++;
    if (breakTime >= 15) {
        breakTime = 15;
    }
    breakTimeDisplay.innerHTML = breakTime.toString();
};

let breakDown = function () {
    console.log("breakDown");
    breakTime--;
    if (breakTime <= 1) {
        breakTime = 1;
    }
    breakTimeDisplay.innerHTML = breakTime.toString();
};

let setWorkTime = function (nbr) {
    countDown.innerHTML = (nbr + ":00").toString();

}

