'use strict';

function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(number) {
  this.temperature = this.temperature + number;
};

Thermostat.prototype.down = function(number) {
  this.temperature = this.temperature - number;
};
