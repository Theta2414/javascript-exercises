const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    } else if (start > end) {
        return (start - end + 1) / 2 * (start + end);
    } else {
        return (end - start + 1) / 2 * (start + end);
    }
};

// Do not edit below this line
module.exports = sumAll;
