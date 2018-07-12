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

});
