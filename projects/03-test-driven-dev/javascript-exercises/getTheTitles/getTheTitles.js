const getTheTitles = function(arr) {
    let result = [];
    arr.forEach(function(item) {
        result.push(item.title);
    });
    return result;
}

module.exports = getTheTitles;
