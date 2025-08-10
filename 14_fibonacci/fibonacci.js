let fib = [0, 1, 1];

const fibonacci = function(pos) {
    pos = Math.floor(Number(pos));
    if (pos < 0) {
        return "OOPS";
    } else if (fib[pos] === undefined) {
        fib[pos] = fibonacci(pos - 1) + fibonacci(pos - 2);
    }
    return fib[pos];
};

// Do not edit below this line
module.exports = fibonacci;
