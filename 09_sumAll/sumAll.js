const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    } else {
        return (Math.abs(start - end) + 1) / 2 * (start + end);
    }
};

// Do not edit below this line
module.exports = sumAll;
