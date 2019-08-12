let navContent2 = function () {
    const element = document.createElement("div");
    element.classList.add("navContent");

    //h2
    let h2 = document.createElement("h2");
    h2.innerHTML = "Menu";
    element.appendChild(h2);


    let p = document.createElement("p");
    p.innerHTML = "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr,";
    element.appendChild(p);
    element.classList.add("invisible");
    element.classList.add("two");
    //img1
    let img1 = document.createElement("img");
    img1.src = '../src/img/coffee-563797_640.jpg';
    element.appendChild(img1);

    //img2
    let img2 = document.createElement("img");
    img2.src = '../src/img/coffee-983955_640.jpg';
    element.appendChild(img2);

    //img3
    let img3 = document.createElement("img");
    img3.src = '../src/img/coffee-2714970_640.jpg';
    element.appendChild(img3);

    //p2
    let p2 = document.createElement("p");
    p2.innerHTML = "Credits for img: <br/>" +
        "1: <a href='https://pixabay.com/photos/coffee-coffee-beans-cup-of-coffee-563797/'>pixabay.com</a><br/>" +
        "2: <a href='https://pixabay.com/photos/coffee-cafe-mug-decorative-drink-983955/'>pixabay.com</a><br/>" +
        "3: <a href='https://pixabay.com/photos/coffee-coffee-cup-cup-drink-beans-2714970/'>pixabay.com</a>";
    element.appendChild(p2);
    return element;

};

export default navContent2
