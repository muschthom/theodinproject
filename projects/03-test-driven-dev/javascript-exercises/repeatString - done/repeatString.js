const repeatString = function(strg, x) {
    let result = "";
    if (x === -1 ){
        return "ERROR";
    }
    for (let i = 0; i < x; i++){
        result += strg;
    }
    return result;
}

module.exports = repeatString
