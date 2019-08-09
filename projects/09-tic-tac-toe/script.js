const Player = (name) => {
    let score = 0;
    const getName = () => name;
    const getScore = () => score;
    const setScore = () => {
        score++;
    };
    return {getScore, setScore, getName}
};

let game = function () {
    let name = prompt("Enter your name!");
    let currentState = ["C", "C", "C", "C", "C", "C", "C", "C", "C"];
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
            button.setAttribute("class", "game");
            //game
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
        if (arr[pcChoice] === "C") {
            arr[pcChoice] = "o";

        } else {
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

    let updateScore = function (player, htmlElement) {
        let element = document.getElementById(htmlElement);
        element.innerHTML = player.getScore();
    };

    let updateName = function (player, htmlElement) {
        let element = document.getElementById(htmlElement);
        element.innerHTML = player.getName();
    };


    const user = Player(name);
    const pc = Player("PC");

    updateName(user, "userName");
    updateScore(user, "user-score");
    updateScore(pc, "pc-score");

    let toggleBtn = function (btn) {
        btn.disabled = true;
    };


    let play = function () {
        if (checkStatus(currentState, checkWinner(currentState)) === false) {
            return;
        }
        if (!userIsOn) {
            pcChoose(currentState);
        }
        if (checkStatus(currentState, checkWinner(currentState)) === false) {
            return;
        }
    };

    let checkWinner = function (arr) {
        //Check pc score
        if (arr[0] === "o") {
            if (arr[1] === "o" && arr[2] === "o") {
                return endGame(pc);
            } else if (arr[3] === "o" && arr[6] === "o") {
                return endGame(pc);
            } else if (arr[4] === "o" && arr[8] === "o") {
                return endGame(pc);
            }
        } else if (arr[1] === "o") {
            if (arr[4] === "o" && arr[7] === "o") {
                return endGame(pc);
            }
        } else if (arr[2] === "o") {
            if (arr[4] === "o" && arr[6] === "o") {
                return endGame(pc);
            } else if (arr[5] === "o" && arr[8] === "o") {
                return endGame(pc);
            }
        } else if (arr[3] === "o") {
            if (arr[4] === "o" && arr[5] === "o") {
                return endGame(pc);
            }
        } else if (arr[6] === "o") {
            if (arr[7] === "o" && arr[8] === "o") {
                return endGame(pc);
            }
        }
        //Check user score
        if (arr[0] === "x") {
            if (arr[1] === "x" && arr[2] === "x") {
                return endGame(user);
            } else if (arr[3] === "x" && arr[6] === "x") {
                return endGame(user);
            } else if (arr[4] === "x" && arr[8] === "x") {
                return endGame(user);
            }
        } else if (arr[1] === "x") {
            if (arr[4] === "x" && arr[7] === "x") {
                return endGame(user);
            }
        } else if (arr[2] === "x") {
            if (arr[4] === "x" && arr[6] === "x") {
                return endGame(user);
            } else if (arr[5] === "x" && arr[8] === "x") {
                return endGame(user);
            }
        } else if (arr[3] === "x") {
            if (arr[4] === "x" && arr[5] === "x") {
                return endGame(user);
            }
        } else if (arr[6] === "x") {
            if (arr[7] === "x" && arr[8] === "x") {
                return endGame(user);
            }
        } else {
            return false;
        }


    };


    let checkStatus = function (arr, end) {
        console.log("check status , end = " + end);
        if (end === true) {
            gameIsOn = false;
            console.log("game end");
            return false;
        }
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] === "C") {
                gameIsOn = true;
                console.log("game is on");
            } else {
                counter++;
                console.log("checkStatus round counter " + counter);

                gameIsOn = true;
                if (counter === 8) {
                    gameIsOn = false;
                    console.log("game end");
                    return false;
                }
            }


        }
    };

    let blockBtn = function () {
        let btn = document.querySelectorAll("button.game");
        btn.forEach(function (el) {
            el.disabled = true;
        })

    };

    let endGame = function (winner) {
        blockBtn();
        console.log("winner.getName = " + winner.getName());
        winner.setScore();
        if (winner.getName() === "PC") {
            updateScore(winner, "pc-score");
        } else {
            updateScore(winner, "user-score");
        }
        return true;
    };


    document.getElementById("restart").addEventListener("click", function (){
        currentState = ["C", "C", "C", "C", "C", "C", "C", "C", "C"];
        updateBoard(currentState);
        let btn = document.querySelectorAll("button.game");
        btn.forEach(function (el) {
            el.disabled = false;
        })
    });

    drawBoard(currentState);
    updateBoard(currentState);

};


game();

