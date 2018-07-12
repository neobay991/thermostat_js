'use strict';

function Thermostat(){
  // this is a Constant - MINIMUM_TEMPERATURE
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_TEMPERATURE = 18;
  this.MAXIMUM_LIMIT_PSM_ON = 25;
  this.MAXIMUM_LIMIT_PSM_OFF = 32;
  this.temperature = 20;
  this.powerSavingMode = true;
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
  if (this.isMaximumTemperature()) {
    return;
  }
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

// this method checks if PSM is on or not, by default it is on when
// Thermostat object is initialized this.powerSavingMode = true
Thermostat.prototype.powerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

// this method switches PSM to off
Thermostat.prototype.powerSavingModeOff = function() {
  return this.powerSavingMode = false;
};

// this method switches PSM to on
Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingModeOn() === false) {
      return this.temperature === this.MAXIMUM_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAXIMUM_LIMIT_PSM_ON;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.getCurrentEnergyUsuage = function() {
  // if temp is 18 degrees
  if (this.temperature < this.MEDIUM_TEMPERATURE) {
    return 'low-usage';
  }

  if (this.temperature > this.MEDIUM_TEMPERATURE && this.temperature < this.MAXIMUM_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
    return 'high-usage';
  // if (this.temperature === < 25 && > 17) {
  //   return "medium-usage";
  // }
  //   return "high-usage";
  // }

};
