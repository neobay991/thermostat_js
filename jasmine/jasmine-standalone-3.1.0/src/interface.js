// JQuery
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#psm-off').on('click', function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  // have put updateTemperature into its own function (method( because
  // it is repeatedly invoked (called) in each of the above functions
  function updateTemperature() {
    $('#current_temp').text(thermostat.temperature);

    // change thre css style based on what is returned
    // by getCurrentEnergyUsuage
    if(thermostat.getCurrentEnergyUsuage() === 'low-usage') {
      $('#current_temp').css('color', 'green')
    } else if(thermostat.getCurrentEnergyUsuage() === 'medium-usage') {
      $('#current_temp').css('color', 'black')
    } else {
      $('#current_temp').css('color', 'red')
    }
  }
});
