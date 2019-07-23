const sumAll = function(a, b) {
    let result = 0;
    if(typeof  arguments[0] !== "number" || typeof  arguments[1] !== "number" || arguments[0] < 0 || arguments[1] < 0){
        return "ERROR";
    } else if(a < b){
        for(let i = a; i <=b; i++) {
            result += i;
        }
    }else {
        for(let i = b; i <=a; i++) {
            result += i;
        }
    }
    return result;
};

module.exports = sumAll
