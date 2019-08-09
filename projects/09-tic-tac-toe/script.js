let game = function () {
    let currentState = ["C", "C", "C", "C", "C", "C", "C", "C", "C"];
    let dummyData = ["", "", "", "x", "x", "o", "o", "o", "o"];
    let userIsOn = true;
    let gameIsOn = true;
    let userChoice = "";

    let main = document.getElementById("main");

//set board
    let drawBoard = function (arr) {
        for (let i = 0; i < 9; i++) {
            let button = document.createElement("button");
            let br = document.createElement("br");
            button.setAttribute("id", i + "");
            for (let j = 0; j < arr.length; j++) {
                button.innerHTML = arr[j] + "";
            }
            button.addEventListener("click", function () {
                userChoose(currentState, this);
            });
            main.appendChild(button);
            if ((i + 1) % 3 === 0) {
                main.appendChild(br);
            }
        }
    };

    let userChoose = function (arr, e) {
        userChoice = "";
        let position = e.id;
        console.log("position = " + position);
        arr[position] = "x";
        userChoice = "x";
        updateBoard(arr);
        userIsOn = false;
        play();
    };

    let pcChoose = function (arr) {
        let pcChoice = parseInt((Math.random() * 10) + "");
        console.log("pcChoice = " + pcChoice);
        if (arr[pcChoice] === "C" ) {
            arr[pcChoice] = "o";

        } else{
            pcChoose(arr);

        }
        updateBoard(arr);
        userIsOn = true;

    };

    let updateBoard = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            let btn = document.getElementById(i + "");
            if (arr[i] !== "C") {
                toggleBtn(btn);
            }
            btn.innerHTML = arr[i];
        }
    };

    let toggleBtn = function (btn) {
        btn.disabled = true;
    };


    let play = function () {
        checkWinner(currentState);
        if(checkStatus(currentState)=== false){
            return;
        };
        if (!userIsOn) {
            pcChoose(currentState);
        }
    };

    let checkWinner = function (arr){
    }

    let checkStatus = function (arr) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            counter++;
            console.log("checkStatus round " + counter);
            if (arr[i] === "C") {
                gameIsOn = true;
                console.log("game is on");
            } else if (counter === 9){
                gameIsOn = false;
                console.log("game end");
                return false;
            } else {
                gameIsOn = true;

            }
        }
    };

    drawBoard(currentState);
    updateBoard(currentState);

};

game();

