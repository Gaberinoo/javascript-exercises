const repeatString = (string, num) => {
    if (num === 0) {
        string = "";
    } else if (num < 0) {
        string = "ERROR";
    }
    let str = string;
    for (let i = 1; i < num; i++) {
        str += string;
    }
    return (str);
};

// Do not edit below this line
module.exports = repeatString;

