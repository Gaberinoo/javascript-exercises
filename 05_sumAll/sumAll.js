const sumAll = function(firstValue, secondValue) {
    let sum = 0;
    if (firstValue < 0 || secondValue < 0 || typeof firstValue !== "number" || typeof secondValue !== "number") {
        return "ERROR";
    } else if (firstValue < secondValue) {
        for (let i = firstValue; firstValue <= secondValue; secondValue--) {
            sum += secondValue;
        }
        return sum;
        } else if (firstValue > secondValue) {
            for (let i = secondValue; secondValue <= firstValue; firstValue--) {
                sum += firstValue;
            }
            return sum;
        }
}


sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
