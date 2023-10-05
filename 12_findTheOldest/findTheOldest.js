const findTheOldest = function(arr) {
    return arr.reduce((acc, currentValue) => {
      if (!acc.age) {
        acc.age = 0;
      }
      if (!currentValue.yearOfDeath) {
        currentValue.yearOfDeath = new Date().getFullYear();
      }
      currentValue.age = currentValue.yearOfDeath - currentValue.yearOfBirth;
      if (acc.age < currentValue.age) {
        acc.name = currentValue.name;
        acc.yearOfBirth = currentValue.yearOfBirth;
        acc.yearOfDeath = currentValue.yearOfDeath;
        acc.age = currentValue.age;
      }
      return acc;
    }, {})
  }

// Do not edit below this line
module.exports = findTheOldest;
