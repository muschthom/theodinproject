let main = document.querySelector(".main");

let sliderDiv1 = document.createElement("div");
sliderDiv1.classList.add("sliderDiv1");
main.appendChild(sliderDiv1);

let h2 = document.createElement("h2");
sliderDiv1.appendChild(h2);
h2.innerHTML = "Slider 1";

let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");

img1.src = "img/beach-2089936_1920.jpg";
img2.src = "img/surfer-2212948_1920.jpg";
img3.src = "img/wave-1913559_1920.jpg";

img1.classList.add("active-slider1");
img1.classList.add("slider1");
img2.classList.add("slider1");
img3.classList.add("slider1");

sliderDiv1.appendChild(img1);
sliderDiv1.appendChild(img2);
sliderDiv1.appendChild(img3);

function run() {
    setTimeout(function () {
        let imgList = document.querySelectorAll("img");
        console.log("imgList.length = " + imgList.length);
        let i = 1;
        let current = 0;
        imgList.forEach(function (el) {
            if (el.classList.contains("active-slider1")) {
                el.classList.toggle("active-slider1");
                current = i;
                console.log("current = " + current);
            }
            i++;
            console.log(i);
        });




        switch (current) {
            case 1:
                img2.classList.add("active-slider1");
                break;
            case 2:
                img3.classList.add("active-slider1");
                break;
            case 3:
                img1.classList.add("active-slider1");
                break;
        }


        run();
    }, 4000);
}

run();
