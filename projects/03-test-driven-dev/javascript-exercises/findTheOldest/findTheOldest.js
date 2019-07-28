let findTheOldest = function (arr) {

    //calculate age
    arr.forEach(function (item) {

        //check if still alive
        if(item.yearOfDeath === undefined){
            item.yearOfDeath = 2019;
        }
        item.age = item.yearOfDeath - item.yearOfBirth;
    });

    //sort arr
    arr.sort(function (a, b) {
        return a.age - b.age;
    });

    //return last item
    return arr[arr.length-1];
};

module.exports = findTheOldest
