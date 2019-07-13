const removeFromArray = function() {
    let argLength = arguments.length;
    let result = [];
    for (let i = 1; i < argLength; i++){
        for (let j = 0; j < arguments[0].length; j++) {
            if (arguments[0][j] === arguments[i]){
                console.log("true" + " i = " + i + ";  j = " + j);
                arguments[0].splice(j, 1);
                console.log("arguments[0] = " + arguments[0]);
            }
        }
    }
    return arguments[0];
};


module.exports = removeFromArray
