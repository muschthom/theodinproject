let navContent1 = function () {
    const element = document.createElement("div");
    element.classList.add("navContent");
    let img = document.createElement("img");
    img.src = '../src/img/coffee-984328_1920.jpg';
    element.appendChild(img);
    element.classList.add("one");

    return element;
};

export default navContent1
