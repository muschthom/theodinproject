window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

window.onscroll = function () { window.scrollTo(0, 0); };

let operate = function (a, b, calc) {
    switch (calc) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
};

let add = function (a, b) {
    return a + b;
};

let substract = function (a, b) {
    return a - b;
};

let multiply = function (a, b) {
    return a * b;
};

let divide = function (a, b) {
    return a / b;
};
let nbr1 = "";
let nbr2 = "";
let operator = "";
let operationSet = false;
let commaSet1 = false;
let commaSet2 = false;
let minus1 = false;
let minus2 = false;
let equal = false;
let calc;
let resultString;

let result = document.getElementById("result");


let btn = document.getElementsByTagName("button");
let btnArray = Array.prototype.slice.call(btn);


let btnPush = btnArray.forEach(function (el) {
    el.addEventListener("click", function (e) {
        let val;
        let target = e.target || e.srcElement;
        console.log("target.innerHTML " + target.innerHTML);
        let formula = document.getElementById("formula");
        val = target.innerHTML;
        if (formula.innerHTML === "0") {
            formula.innerHTML = "";
        }
        if (val === "AC") {
            nbr1 = "";
            nbr2 = "";
            operator = "";
            result.innerHTML = "0";
            formula.innerHTML = "0";
            operationSet = false;
            commaSet1 = false;
            commaSet2 = false;
            minus1 = false;
            minus2 = false;
            return;
        }
        if (val === "%") {
            (operationSet === false) ? nbr1 /= 100 : nbr2 /= 100;
        }
        console.log("isNaN(parseInt(val)) = " + isNaN(parseInt(val)));
        if (!isNaN(parseInt(val)) && operationSet === false) {
            if(nbr1.length > 8){
                val = "";
            }
            nbr1 += val;
            console.log("nbr1 = " + nbr1);
        }
        if (val === "÷" || val === "x" || val === "-" || val === "+") {
            operationSet = true;
            operator = val;
        }


        if (val === "+/-" && operationSet === false && minus1 === false) {
            minus1 = true;
            nbr1 = "-" + nbr1;
        } else if (val === "+/-" && operationSet === false && minus1 === true) {
            minus1 = false;
            console.log("nbr1 = " + nbr1);
            console.log(" nbr1.substring(1) = " + nbr1.substring(1));
            nbr1 = nbr1.substring(1);
            console.log(" nbr1 nach Zuweisung " + nbr1);
        }

        if (val === "+/-" && operationSet === true && minus2 === false) {
            minus2 = true;
            nbr2 = "-" + nbr2;
        } else if (val === "+/-" && operationSet === true && minus2 === true) {
            minus2 = false;
            console.log("nbr2 = " + nbr2);
            console.log(" nbr2.substring(1) = " + nbr2.substring(1));
            nbr2 = nbr2.substring(1);
            console.log(" nbr2 nach Zuweisung " + nbr2);
        }


        if (val === "," && operationSet === false && commaSet1 === false) {
            nbr1 = nbr1 + ".";
            commaSet1 = true;
        }
        if (val === "," && operationSet === true && commaSet2 === false) {
            nbr2 = nbr2 + ".";
            commaSet2 = true;

        }

        if (!isNaN(parseInt(val)) && operationSet === true) {
            if(nbr2.length >= 8){
                val = "";
            }
            nbr2 += val;
            console.log("nbr2 = " + nbr2);
        }
        if (val === "=") {
            equal = true;
            commaSet2 = false;

            console.log("nbr1 = " + nbr1 + " nbr2 = " + nbr2);
            if (nbr1 === "") {
                nbr1 = 0;
                nbr2 = 0;
                operator = "+";

            }
            if (nbr2 === "") {
                nbr2 = 0;
            }

            if(nbr1.length >= 8){
                val = "";
            }
            console.log("danach: nbr1 = " + nbr1 + " nbr2 = " + nbr2);

            calc = operate(parseFloat(nbr1), parseFloat(nbr2), operator);
            calc = Math.floor(calc * 10e9) / 10e9;
            calc = calc.toString();
            if (calc > 999999999) {
                calc = "Error";
            }
            resultString = calc;
            resultString = resultString.substring(0, 11);
            result.innerHTML = resultString;
        }

        formula.innerHTML = nbr1 + " " + operator + " " + nbr2;


        //normale Rechnung
        if(nbr1 !== "" && nbr2 !== "" && equal){
            nbr1 = calc;
            nbr2 = "";
            operator = "+";
            equal = false;
        }

        //nbr1 gesetzt, nbr2 nicht gesetzt
        if (nbr1 !== "" && nbr2 === "" + equal) {
            nbr1 = calc;
            nbr2 = 0;
            operator = "+";
            equal = false;
        }

        if (nbr1 === "" && equal){
            nbr1 = calc;
            nbr2 = 0;
            operator = "+";
            equal = false;
        }


    })


});


