'use strict';

describe('Thermostat test: ', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat starts/ initializes at 20 degrees default v1', function() {
    // there are no () after 'temperature' because we are
    // testing for the property (object) value and not a method
    expect(thermostat.temperature).toEqual(20);
  });

  it('Thermostat starts/ initializes at 20 degrees default v2', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Increase temperature with up function', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Decrease temperature with down function', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('Decrease temperature with down function a minimum of 10 degrees',
    function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning

    // this is a for loop block, to loop 10 times to decrease the temperature
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});
