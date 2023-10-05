const fibonacci = function(value) {
    if (value < 0) return 'OOPS';
    let fibArr = [1, 1];
    let a = 1;
    let b = 1;
    let c;
    for (; fibArr.length < value;) {
        c = a + b;
        fibArr.push(c);
        a = b;
        b = c;
    }
    return fibArr[value - 1];
};

// Do not edit below this line
module.exports = fibonacci;
