const palindromes = function(str) {
    let splitString = str.split(""); //split string in single letters

    //clean string by removing everything exp letters
    let cleanedArray = splitString.filter(function (el) {
        console.log("el = " + el);
        return /\w/.test(el);
    });

    //join cleaned array to string
    let cleanedStr = cleanedArray.join("");

    //reverse cleaned array
    let reverseArray = cleanedArray.reverse();

    //join cleaned array to string
    var joinArray = reverseArray.join("");

    //compare strings in lowercase
    return (cleanedStr.toLowerCase() === joinArray.toLowerCase());
};

module.exports = palindromes
