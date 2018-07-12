// JQuery
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  // api request for city $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=63d1ac51575b09b11d1f8408f4f4ccd3&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // });

  // to load city dynamically, based on the user's selection.
  // On the FE, there is a selector with pre-defined cities,
  // and some JavaScript to detect the change and cocatenate to the api
  $('#options-city').change(function() {
    var city = $('#options-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=63d1ac51575b09b11d1f8408f4f4ccd3&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    });
  });

  // to load city dynamically, based on the user's selection.
  // On the FE, there is a selector with pre-defined cities,
  // and some JavaScript to insert the selecrted city
  $('#options-city').change(function() {
    var city = $('#options-city').val();
      $('#current-city').text(city)
  });

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
