const removeFromArray = function(myArray, ...filtered) {
    function filterArray(item) {
        return !filtered.includes(item);
    }
    return myArray.filter(filterArray);
};

// Do not edit below this line
module.exports = removeFromArray;


// Find an item inside of the array by its content and not index position and 
// return a new array with the same values of the original array - filter