let navContent1 = function () {
    const element = document.createElement("div");
    element.classList.add("navContent");

    //h2
    let h2 = document.createElement("h2");
    h2.innerHTML = "Welcome";
    element.appendChild(h2);


    //img
    let img = document.createElement("img");
    img.src = '../src/img/coffee-984328_1920.jpg';
    element.appendChild(img);
    element.classList.add("one");

    //p
    let p = document.createElement("p");
    p.innerHTML = "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr,";
    element.appendChild(p);

    let p2 = document.createElement("p");
    p2.innerHTML = "Credits for img: " +
        "<a href='https://pixabay.com/photos/coffee-making-cafe-shop-espresso-984328/'>pixabay.com</a><br/>";
    element.appendChild(p2);

    return element;
};

export default navContent1
