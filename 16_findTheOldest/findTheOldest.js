const findTheOldest = function(arr) {
    let ageArr = [];
    for (person in arr) {
        if (!("yearOfDeath" in arr[person])) {
            arr[person].yearOfDeath = new Date().getFullYear();
        }
        arr[person].age = arr[person].yearOfDeath - arr[person].yearOfBirth;
        ageArr.push(arr[person].age);
    }
    ageArr.sort((a, b) => b - a);
    let oldest = ageArr[0];
    return arr.filter((person) => person.age === oldest)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
