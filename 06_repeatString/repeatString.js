const repeatString = function(string, numberOfTimes) {
    numberOfTimes = Math.round(numberOfTimes);
    if (numberOfTimes < 0) {
        return "ERROR"
    } else {
        let result = "";
        for (let i = 1; i <= numberOfTimes; i++) {
            result += string;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
