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

  it('Has power saving mode on by default', function() {
    expect(thermostat.powerSavingModeOn()).toBe(true);
  });

  it('Can switch Power Saving Mode off', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingModeOn()).toBe(false);
  });

  it('Can switch Power Saving Mode back on after switching it off', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.powerSavingModeOn()).toBe(true);
  });

  it('Maximum temperature 25 degress if power saving mode is on', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning

    // this is a for loop block, to loop 6 times to increase the temperature
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('Maximum temperature 32 degress if power saving mode is off', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning

    // this is a for loop block, to loop 13 times to increase the temperature
    // first we need to switch PSM to off using powerSavingModeOff
    thermostat.powerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('Resets the temperature back to 20 degrees', function() {
    // there are () after 'getCurrentTemperature' because we are
    // testing what this method is returning
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
