const removeFromArray = function(arr, ...deleteVars) {
    return arr.filter((item) => !deleteVars.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
