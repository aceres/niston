function showDigitalClock() {

// Create a newDate() object
  var newDate = new Date();
// Extract the current date from Date object
  newDate.setDate(newDate.getDate());

  setInterval( function() {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
  },1000);

  setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
  }, 1000);
}