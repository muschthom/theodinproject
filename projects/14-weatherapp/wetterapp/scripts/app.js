var data;
//app.getForecast = function (key, label) {
//var statement = 'select * from weather.forecast where woeid=' + key;
//var url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' +
//      statement;
var urlLe = 'http://api.openweathermap.org/data/2.5/forecast?id=2879139&APPID=4525b090e3d6b2a65cae311d920e11ed';
var urlLue = 'http://api.openweathermap.org/data/2.5/forecast?id=2875601&APPID=4525b090e3d6b2a65cae311d920e11ed';
var urlTh = 'http://api.openweathermap.org/data/2.5/forecast?id=2823141&APPID=4525b090e3d6b2a65cae311d920e11ed';
var url = urlLe;





var btn1 = document.getElementById("city1");
var btn2 = document.getElementById("city2");
var btn3 = document.getElementById("city3");

btn1.addEventListener("click", function () {
    url = urlLe;
    getData();

    console.log("eventlistener LE");
    btnOn(btn1);
    btnOff(btn2);
    btnOff(btn3);


});

btn2.addEventListener("click", function () {
    console.log("eventlistener LUE");
    url = urlLue;
    getData();

    btnOff(btn1);
    btnOn(btn2);
    btnOff(btn3);
});

btn3.addEventListener("click", function () {
    url = urlTh;
    getData();

    console.log("eventlistener TH");
    getData();
    btnOff(btn1);
    btnOff(btn2);
    btnOn(btn3);
});


function btnOn(button) {
    if (!button.classList.contains('active')) {
        button.classList.add("active");
        button.classList.remove("inactive")
    }
}


function btnOff(button) {
    if (button.classList.contains('active')) {
        button.classList.add("inactive");
        button.classList.remove("active")
    }

}


// Fetch the latest data.

var request = new XMLHttpRequest();
console.log("request ");
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function () {
    getData();
};

function getData() {

    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        data = request.response;
        console.log(data);
        showHeadline(data);
        showCurrentTemp(data);
        showDate();
        drawTemp(data);
        setIcons(data);
        setCanvas(getImgHeight());
    }
    return data;
}


function showCurrentTemp(jsonObj) {
    document.getElementById("curr-temp-nr").innerHTML = parseFloat(-273.15 + jsonObj.list[0].main.temp).toFixed(0) + "°";
};

function showHeadline(jsonObj) {
    try {
        document.getElementById("city").innerHTML = jsonObj.city.name;
    }
    catch{
        console.log("catch");
    }
}

function setIcons(jsonObj) {
    var src = jsonObj.list[0].weather[0].icon;
    console.log("src = " + src);
    document.getElementById("curr-img").src = "img/" + src + ".png";
    var j = (currentHour(data)) / 3;
    var i = 0;
    for (var ic = j; ic < 25; ic++) {
        console.log("var ic = " + ic);
        var src = jsonObj.list[i].weather[0].icon;
        console.log("src = " + src);
        document.getElementById("img" + ic).src = "img/" + src + ".png";
        i++;
    }

}

function showDate() {


    var date = new Date().toLocaleDateString() // displays date
    var time = new Date().toLocaleTimeString() // displays time
    var zeit = time.toString();
    console.log("zeit " + zeit);
    document.getElementById("date").innerHTML = (date + ", " + time).toString();


}

//Canvas

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



function currentHour(jsonObj) {
    var date = new Date(jsonObj.list[0].dt * 1000);
    var hour = date.getHours() - 1;
    console.log("hours dt = " + hour);
    return hour;
}


function drawTemp(jsonObj) {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.strokeStyle = "#9f978b";
    ctx.fillStyle = "#9f978b";
    ctx.lineWidth = 3;


    //Stunde des aktuell ausgelesenen Werts


    //da Schritte in 3-er Schritten
    var j = (currentHour(data)) / 3;

    //Nulllinie mit Faktor 1,5
    var y0 = 43;


    var xStep = c.width / 24 ;
    var y;

    var x = xStep * j;

    y = parseFloat(-273.15 + jsonObj.list[0].main.temp).toFixed(0);
    yFinal = (y0 - y);
    ctx.beginPath();
    ctx.ellipse(x, yFinal, 2, 6, 0, 0, 2 * Math.PI);
    ctx.fill();

    for (var i = 0; i < 25; i++) {
        x = xStep * j;
        var x1 = xStep * (j + 1);
        //y = jsonObj.list[j].main.temp;
        y = parseFloat(-273.15 + jsonObj.list[i].main.temp).toFixed(0);
        console.log("y = " + y);

        yFinal = (y0 - y);
        console.log("yfinal = " + yFinal);
        y1 = parseFloat(-273.15 + jsonObj.list[i + 1].main.temp).toFixed(0);
        y1Final = (y0 - y1);
        // Meine Lösung für gerade Liniien
        /*
            ctx.moveTo(x, yFinal);
            ctx.lineTo(x1, y1Final);
            ctx.stroke();
        */
        ctx.moveTo(x, yFinal);
        var xc = (x + x1) / 2;
        var yc = (yFinal + y1Final) / 2;
        ctx.quadraticCurveTo(xc, yc, x1, y1Final);
        j++;

    }

    // curve through the last two points

    ctx.quadraticCurveTo(x, yFinal, x1, y1Final);
    ctx.stroke();


}

function getImgHeight() {
    var img = document.getElementById('line-bg');
//or however you get a handle to the IMG
    var height = img.clientHeight;
    console.log("height = " + height);
    return -height;
}

function setCanvas(height) {
    var canvas = document.getElementById('myCanvas');
    canvas.style.marginTop = height;
}


//Zeit aus json convertieren

function timeConvert(jsonObj) {
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(jsonObj.list[0].dt * 1000);
    console.log("date dt = " + date);
// Hours part from the timestamp
    var hours = date.getHours() - 1;
    console.log("hours dt = " + hours);

// Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};


let burger = document.querySelector("#burger");
let searchBtn = document.querySelector("#searchCity");
let input = document.querySelector("input");

let burgermenu = document.querySelector("#menu");
burger.addEventListener("click", function () {
    toggleBurgerMenue();
});

function toggleBurgerMenue() {
    burgermenu.classList.toggle("hidden");
    if(!burgermenu.classList.contains("hidden")){
        input.value = "";
        input.focus();
    }
}

searchBtn.addEventListener("click", function () {
    let city = input.value;
    console.log(city);
    //let localUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var localUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=4525b090e3d6b2a65cae311d920e11ed&q=' + city;

    url = localUrl;
    getData();
    toggleBurgerMenue();
    btnOff(btn1);
    btnOff(btn2);
    btnOff(btn3);

});
