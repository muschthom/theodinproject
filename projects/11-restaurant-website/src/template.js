function component(type, strg) {
    const element = document.createElement(type);
    element.innerHTML = strg;
    return element;
}


export default component
