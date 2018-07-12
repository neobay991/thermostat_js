'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

// Thermostat up and down method which takes an argument
// to increase/ decrease temperature

// Thermostat.prototype.up = function(number) {
//   this.temperature = this.temperature + number;
// };
//
// Thermostat.prototype.down = function(number) {
//   this.temperature = this.temperature - number;
// };

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  // this if block is a guard statement, it checks if the current temperature
  // is not below the minimum temperature
  if (this.minimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

// this method checks '===' if the current temperature is equal to the
// minimum temperature and returns a boolean value 'true' or 'false'
Thermostat.prototype.minimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};
