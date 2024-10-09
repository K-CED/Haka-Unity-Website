$(window).load(function() {
  $("body").removeClass("preload");
});



function play() {
        var audio = document.getElementById("hoveraudio");
        audio.play();
        audio.currentTime = 0.001; 
      };

function clicksound() {
        var audiotwo = document.getElementById("clickaudio");
        audiotwo.play();
        audiotwo.currentTime = 0.001;  