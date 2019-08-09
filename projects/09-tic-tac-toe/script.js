//prototype for game participants
const Player = (name) => {
    let score = 0;
    const getName = () => name;
    const getScore = () => score;
    const setScore = () => {
        score++;
    };
    return {getScore, setScore, getName}
};

//game and game mechanics -> private access
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

    //user choose button -> get id of button -> set value in array currentState to "x"
    // -> update board -> switch, who is on (userIsOn)
    let userChoose = function (arr, e) {
        userChoice = "";
        let position = e.id;
        console.log("position = " + position);
        arr[position] = "x";
        userChoice = "x";
        updateBoard(arr);
        userIsOn = false;
        //to continue the game
        play();
    };

    //pc choice made my Math.random -> set value in array in currentState to "o"
    // -> update board -> switch, who is on (userIsOn)
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

    //update values of Buttons
    let updateBoard = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            let btn = document.getElementById(i + "");
            if (arr[i] !== "C") {
                toggleBtn(btn);
            }
            btn.innerHTML = arr[i];
        }
    };

    //update scoreboard
    let updateScore = function (player, htmlElement) {
        let element = document.getElementById(htmlElement);
        element.innerHTML = player.getScore();
    };

    //set names on scoreboard
    let updateName = function (player, htmlElement) {
        let element = document.getElementById(htmlElement);
        element.innerHTML = player.getName();
    };


    //create player
    const user = Player(name);
    const pc = Player("PC");

    //set initial scoreboard
    updateName(user, "userName");
    updateScore(user, "user-score");
    updateScore(pc, "pc-score");

    //disable button
    let toggleBtn = function (btn) {
        btn.disabled = true;
    };

    //
    let play = function () {
        let gameIsStillRunning = checkStatus(currentState, checkWinner(currentState));
        if ( gameIsStillRunning === false) {
            return;
        }
        if (!userIsOn && !gameIsStillRunning === true) {
            pcChoose(currentState);
            checkWinner(currentState);
        }
    };

    //check, if there is a winner
    //all rows and colums are checked
    //return endGame(player) = true
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


    //current status of the game:
    //return false, if game ended
    //
    let checkStatus = function (arr, end) {
        console.log("check status , end = " + end);
        //if endGame = true
        if (end === true) {
            gameIsOn = false;
            console.log("game end");
            return false;
        }
        let counter = 0;
        // check values in array
        for (let i = 0; i < arr.length; i++) {

            //if this value = C in array -> value not set by player -> game is still running
            if (arr[i] === "C") {
                gameIsOn = true;
                console.log("game is on");
            }
            //value is set -> counter++
            else {
                //count filled values in array
                counter++;
                console.log("checkStatus round counter " + counter);
                gameIsOn = true;

                //if counter = 8 -> no more options -> end game
                if (counter === 8) {
                    gameIsOn = false;
                    console.log("game end");
                    return false;
                }
            }


        }
    };

    //block all buttons
    let blockBtn = function () {
        let btn = document.querySelectorAll("button.game");
        btn.forEach(function (el) {
            el.disabled = true;
        })

    };

    //there is a winner -> block all buttons
    //set score -> update score -> return true
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


    //restart a new game
    document.getElementById("restart").addEventListener("click", function (){
        currentState = ["C", "C", "C", "C", "C", "C", "C", "C", "C"];
        updateBoard(currentState);
        let btn = document.querySelectorAll("button.game");
        btn.forEach(function (el) {
            el.disabled = false;
        })
    });

    //initial board is drawn and set
    drawBoard(currentState);
    updateBoard(currentState);

};

//run game
game();

