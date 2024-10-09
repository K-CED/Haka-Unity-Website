$(window).load(function() {
  $("body").removeClass("preload");
});



$(document).ready(function(){
  $(".ExpandButton").click(function(){
    $(".ExpandButton").fadeOut(100);
    $('.TransparentContent').animate({'height' : '1080px'}, {duration: 'slow', queue: false}, function() {});
    $('.DescriptionBackground2').animate({'height' : '1020px'}, {duration: 'slow', queue: false}, function() {});
    $('.Content').animate({'height' : '1035px'}, {duration: 'slow', queue: false}, function() {});
    $('.Mission').fadeIn(900);
    $('.Vision').fadeIn(900);

      });
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
      };

