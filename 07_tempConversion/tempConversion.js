const convertToCelsius = function(temperatureF) {
  temperatureF = (temperatureF - 32) * 5 / 9;
  temperatureF = Math.round(temperatureF * 10)/ 10;
  return temperatureF
};

const convertToFahrenheit = function(temperatureC) {
  temperatureC = (temperatureC * 9 / 5 + 32);
  temperatureC = Math.round(temperatureC * 10)/ 10;
  return temperatureC
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
