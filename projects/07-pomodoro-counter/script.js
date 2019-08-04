let btn = document.getElementsByTagName("button");
let btnArray = Array.prototype.slice.call(btn);

let workTime = 25;
let breakTime = 5;
let countTime = "25:00";
let min = 25;
let sec = 0;
let operating;
let isPause = false;
let workRound = 1;



let workTimeDisplay = document.getElementById("workNbr");
workTimeDisplay.innerHTML = workTime.toString();

let breakTimeDisplay = document.getElementById("breakNbr");
breakTimeDisplay.innerHTML = breakTime.toString();

let countDown = document.getElementById("countDown");
countDown.innerHTML = countTime.toString();


//add eventlistener to buttons
btnArray.forEach(function (el) {
    el.addEventListener("click", function (e) {

        // get button id
        let target = e.target.id;
        switch (target) {
            case "play":
                play();
                break;
            case "pause":
                pause();
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
});

//main function
let operate = function (a, b) {
    let min = a;
    if (b === 0) {
        b = 59;
    }
    let sec = b;

    //countdown get activated
    let timer = setInterval(function () {
        //handle pause
        let val = getVal();
        if(!val){
            clearInterval(timer);
        }
        if (sec === 59) {
            min -= 1;
        }
        if (sec < 10) {
            countDown.innerHTML = min + ":0" + sec;
        } else {
            countDown.innerHTML = min + ":" + sec;
        }

        //time run out
        if (sec <= 0 && min === 0) {

            // sound
            let audio = new Audio('sound/Computer_Magic-Microsift-1901299923.wav');
            audio.play();

            //stop counter
            clearInterval(timer);

            //if 4 workrounds -> stop
            if(workRound === 4){
                document.getElementById("pause").disabled = true;
                document.getElementById("play").disabled = true;
                return;
            }

            //work time or break time?
            //enter break time
            if(!isPause) {
                isPause = true;

                //update display
                document.getElementById("round").innerHTML = "BREAK ROUND " + workRound;
                document.body.style.backgroundColor = "green";
                btnArray.forEach(function (el) {
                    el.style.backgroundColor = "green";
                });

                //restart timer for break
                operate(breakTime, 59);

            }

            //enter work time
            else {
                isPause = false;

                //update work round
                workRound++;

                //update display
                document.getElementById("round").innerHTML = "WORK ROUND " + workRound;
                document.body.style.backgroundColor = "#999";
                btnArray.forEach(function (el) {
                    el.style.backgroundColor = "#999";
                });

                //start work time
                operate(workTime, 59);
            }
            return false;
        } else if (sec <= 0) {
            sec = 60;
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
    document.getElementById("round").innerHTML = "WORK ROUND " + workRound;

    let valArr = getCurrentTime();
    min = valArr[0] * 1;
    sec = valArr[1] * 1;
    operating = true;
    if (operate !== true) {
        operate(min, sec);
    }

    //when started, disable all ex. pause
    document.getElementById("play").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("workUp").disabled = true;
    document.getElementById("workDown").disabled = true;
    document.getElementById("breakUp").disabled = true;
    document.getElementById("breakDown").disabled = true;

};

let pause = function () {
    console.log("pause");
    operating = false;
    //enable play, disable pause
    document.getElementById("pause").disabled = true;
    document.getElementById("play").disabled = false;
};

let restart = function () {
    //reload
    location.reload();
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

