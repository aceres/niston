$(document).ready(function() {
  showDigitalClock();
  showPlayButton();
});

function showStopButton() {
  $("article section:last-child .glyphicon-stop").show();
  $("article section:last-child .glyphicon-play").hide();
}

function showPlayButton() {
  $("article section:last-child .glyphicon-play").show();
  $("article section:last-child .glyphicon-stop").hide();
}

$(window).load(function() {
  $('.marquee').marquee({
    duration: 10000,
    pauseOnHover: true
  });
});

