let navContent3 = function () {
    const element = document.createElement("div");
    element.classList.add("navContent");
    let p = document.createElement("p");
    p.innerHTML = "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr,";
    element.appendChild(p);
    element.classList.add("invisible");
    element.classList.add("three");
    return element;
};

export default navContent3
