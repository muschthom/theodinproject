const reverseString = function(strg) {
    let reverseString = "";
    for (let i = strg.length - 1; i>=0; i--){
        reverseString += strg[i];
    }
    return reverseString;
}

module.exports = reverseString
