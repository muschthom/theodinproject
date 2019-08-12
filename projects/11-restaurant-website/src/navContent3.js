let navContent3 = function () {
    const element = document.createElement("div");
    element.classList.add("navContent");

    //h2
    let h2 = document.createElement("h2");
    h2.innerHTML = "Directions";
    element.appendChild(h2);

    //p
    let p = document.createElement("p");
    p.innerHTML = "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr, " +
        "ipsum dolor sit amet, consetetur sadipscing elitr," +
    '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10412119.130288253!2d-83.13963335312573!3d27.585037130314458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea1f99ad1bc100f8!2sParadise+Coffee+Shop!5e0!3m2!1sde!2sde!4v1565629294225!5m2!1sde!2sde\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>';
    element.appendChild(p);
    element.classList.add("invisible");
    element.classList.add("three");
    return element;
};

export default navContent3
