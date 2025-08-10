const getTheTitles = function(arr) {
    return arr.reduce((acc, book) => {
        acc.push(book.title);
        return acc;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
