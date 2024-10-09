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
      };


  $(document).ready(function() {
    /* $('.StaffHeading').fadeIn(1500).removeClass('hidden'); */
    $('.WelcomeText').animate({'font-size' : '30px', 'margin-left' : '350px'}, {duration: 1800, queue: false}, function() {});
    $('.WelcomeText').animate({'font-size' : '45px', 'margin-left' : '115px'}, {duration: 1800, queue: true}, function() {});
    $('.WelcomeText').animate({'font-size' : '30px', 'margin-left' : '345px'}, {duration: 1000, queue: true}, function() {});
    $('.WelcomeText').animate({'font-size' : '33px', 'margin-left' : '295px'}, {duration: 1000, queue: true}, function() {});
    


            function showMessageOne() {     
                  $('.WelcomeText').append('MEET ');
                }
                    setTimeout(showMessageOne, 500)

            function showMessageTwo() {     
                  $('.WelcomeText').append('THE ');
                }
                    setTimeout(showMessageTwo, 1000)

            function showMessageThree() {     
                  $('.WelcomeText').append('STAFF ')
                }
                    setTimeout(showMessageThree, 1500)

            function showMessageFour() {     
                  $('.WelcomeText').append('OF ');
                }
                    setTimeout(showMessageFour, 2000)

            function showMessageFive() {     
                  $('.WelcomeText').append('HAKA ');
                }
                    setTimeout(showMessageFive, 2500)

            function showMessageSix() {     
                  $('.WelcomeText').append('UNITY! ' + '&nbsp;');
                }
                    setTimeout(showMessageSix, 3000)


            function showtopbottomline() {     
                  $('.topline').animate({'width' : '995'}, {duration: 1000, queue: false}, function() {});
                  $('.bottomline').animate({'width' : '995', 'margin-left' : '270'}, {duration: 1000, queue: false}, function() {});
                }
                    setTimeout(showtopbottomline, 3500)

            function showleftrightline() {     
                  $('.leftline').animate({'height' : '90px'}, {duration: 700, queue: false}, function() {});
                  $('.rightline').animate({'height' : '90px', 'margin-top' : '185'}, {duration: 700, queue: false}, function() {});
                }
                    setTimeout(showleftrightline, 4500)

            function hidelines() {     
            	  $('.topline').fadeOut(300);
                  $('.bottomline').fadeOut(300);
                  $('.leftline').fadeOut(300);
                  $('.rightline').fadeOut(300);
                }
                    setTimeout(hidelines, 5500)

            function enlargeheadingtext() {     
            	  $('.WelcomeText').animate({'font-size' : '40px', 'margin-left' : '190px'}, {duration: 800, queue: true}, function() {});
                }
                    setTimeout(enlargeheadingtext, 5600)

              

});




$(document).ready(function() {

 function showStarOne() {
	 $('.StarOne').animate({'margin-left' : '-450px', 'margin-top' : '100px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarOne').animate({'margin-left' : '-25px', 'margin-top' : '50px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarOne').animate({'margin-left' : '400px', 'margin-top' : '100px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarOne').animate({'margin-left' : '900px', 'margin-top' : '150px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});    
                }
                    setTimeout(showStarOne, 200)

 function showStarTwo() {
     $('.StarTwo').animate({'margin-left' : '-450px', 'margin-top' : '100px'}, {duration: 600, queue: true, easing: "linear"}, function() {});
     $('.StarTwo').animate({'margin-left' : '-25px', 'margin-top' : '50px'}, {duration: 600, queue: true, easing: "linear"}, function() {});
     $('.StarTwo').animate({'margin-left' : '400px', 'margin-top' : '100px'}, {duration: 600, queue: true, easing: "linear"}, function() {});
     $('.StarTwo').animate({'margin-left' : '900px', 'margin-top' : '250px'}, {duration: 600, queue: true, easing: "linear"}, function() {});
 }

 setTimeout(showStarTwo, 900)



 function showStarThree() {
     $('.StarThree').animate({'margin-left' : '-450px', 'margin-top' : '0px'}, {duration: 900, queue: true, easing: "linear"}, function() {});
     $('.StarThree').animate({'margin-left' : '-100px', 'margin-top' : '150px'}, {duration: 900, queue: true, easing: "linear"}, function() {});
     $('.StarThree').animate({'margin-left' : '300px', 'margin-top' : '0px'}, {duration: 900, queue: true, easing: "linear"}, function() {});
     $('.StarThree').animate({'margin-left' : '900px', 'margin-top' : '250px'}, {duration: 900, queue: true, easing: "linear"}, function() {});
 }

 setTimeout(showStarThree, 700)



function showStarFour() {

     $('.StarFour').animate({'margin-left' : '-200px', 'margin-top' : '140px'}, {duration: 1900, queue: true, easing: "linear"}, function() {});
     $('.StarFour').animate({'margin-left' : '900px', 'margin-top' : '20px'}, {duration: 1900, queue: true, easing: "linear"}, function() {});
 }

 setTimeout(showStarFour, 900)

function showStarFive() {

     $('.StarFive').animate({'margin-left' : '-200px', 'margin-top' : '310px'}, {duration: 1800, queue: true, easing: "linear"}, function() {});
     $('.StarFive').animate({'margin-left' : '900px', 'margin-top' : '350px'}, {duration: 1800, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarFive, 400)



 function showStarSix() {

     $('.StarSix').animate({'margin-left' : '-500px', 'margin-top' : '300px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarSix').animate({'margin-left' : '-100px', 'margin-top' : '250px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarSix').animate({'margin-left' : '400px', 'margin-top' : '330px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});
     $('.StarSix').animate({'margin-left' : '900px', 'margin-top' : '280px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarSix, 900)

  function showStarSeven() {

     $('.StarSeven').animate({'margin-left' : '900px', 'margin-top' : '300px'}, {duration: 1700, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarSeven, 1400)


  function showStarEight() {

     $('.StarEight').animate({'margin-left' : '900px', 'margin-top' : '300px'}, {duration: 1800, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarEight, 2400)


function showStarNine() {

     $('.StarNine').animate({'margin-left' : '900px', 'margin-top' : '400px'}, {duration: 1200, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarNine, 1900)


function showStarTen() {

     $('.StarTen').animate({'margin-left' : '900px', 'margin-top' : '0px'}, {duration: 1000, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarTen, 2600)

 function showStarEleven() {

     $('.StarEleven').animate({'margin-left' : '900px', 'margin-top' : '100px'}, {duration: 900, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarEleven, 3000)

 function showStarTwelve() {

     $('.StarTwelve').animate({'margin-left' : '900px', 'margin-top' : '350px'}, {duration: 900, queue: true, easing: "linear"}, function() {});

 }

 setTimeout(showStarTwelve, 3200)









 function showStaticStarOne() {
     $('.StaticStarOne').fadeIn(400);
 }
 setTimeout(showStaticStarOne, 5700)



  function showStaticStarTwo() {
     $('.StaticStarTwo').fadeIn(400);
 }
 setTimeout(showStaticStarTwo, 5800)



  function showStaticStarThree() {
     $('.StaticStarThree').fadeIn(400);
 }
 setTimeout(showStaticStarThree, 5900)


  function showStaticStarFour() {
     $('.StaticStarFour').fadeIn(400);
 }
 setTimeout(showStaticStarFour, 6000)

  function showStaticStarFive() {
     $('.StaticStarFive').fadeIn(400);
 }
 setTimeout(showStaticStarFive, 6100)

  function showStaticStarSix() {
     $('.StaticStarSix').fadeIn(400);
 }
 setTimeout(showStaticStarSix, 6200)

  function showStaticStarSeven() {
     $('.StaticStarSeven').fadeIn(400);
 }
 setTimeout(showStaticStarSeven, 6300)


  function showStaticStarEight() {
     $('.StaticStarEight').fadeIn(400);
 }
 setTimeout(showStaticStarEight, 6400)

function showStaticStarNine() {
     $('.StaticStarNine').fadeIn(400);
 }
 setTimeout(showStaticStarNine, 6500)

 function showStaticStarTen() {
     $('.StaticStarTen').fadeIn(400);
 }
 setTimeout(showStaticStarTen, 6600)

  function showMiniStars() {
     $('.MiniStar').fadeIn(400);
 }
 setTimeout(showMiniStars, 6700)












function enlargePage() {
 	 $(".StaffContent").css("width", "1519px");
     $('.StaffContent').animate({'height' : '3400px'}, {duration: 2500, queue: true, easing: "linear"}, function() {});
     $(".Quote").fadeIn(1100);
     $(".Footer").fadeIn(100);
 }
 setTimeout(enlargePage, 5600) 


 function kurtfade() {
     $(".KurtHexagon").fadeIn(1000);
     $(".KurtSECTION").fadeIn(1000);
     $(".nametagOne").fadeIn(1000);
 }
 setTimeout(kurtfade, 6000) 

function aldrynfade() {
     $(".AldrynHexagon").fadeIn(1000);
     $(".AldrynSECTION").fadeIn(1000);
     $(".nametagTwo").fadeIn(1000);
 }
 setTimeout(aldrynfade, 6200) 

function nicsfade() {
     $(".NicsHexagon").fadeIn(1000);
     $(".NicsSECTION").fadeIn(1000);
     $(".nametagThree").fadeIn(1000);
 }
 setTimeout(nicsfade, 6400) 

function clairefade() {
     $(".ClaireHexagon").fadeIn(1000);
     $(".ClaireSECTION").fadeIn(1000);
     $(".nametagFour").fadeIn(1000);
 }
 setTimeout(clairefade, 6600) 

function angelynfade() {
     $(".AngelynHexagon").fadeIn(1000);
     $(".AngelynSECTION").fadeIn(1000);
     $(".nametagFive").fadeIn(1000);
 }
 setTimeout(angelynfade, 6800) 

function franzfade() {
     $(".FranzHexagon").fadeIn(1000);
     $(".FranzSECTION").fadeIn(1000);
     $(".nametagSix").fadeIn(1000);
 }
 setTimeout(franzfade, 7000) 

function jamesfade() {
     $(".JamesHexagon").fadeIn(1000);
     $(".JamesSECTION").fadeIn(1000);
     $(".nametagSeven").fadeIn(1000);
 }
 setTimeout(jamesfade, 7200) 


function johnfade() {
     $(".JohnHexagon").fadeIn(1000);
     $(".JohnSECTION").fadeIn(1000);
     $(".nametagEight").fadeIn(1000);
 }
 setTimeout(johnfade, 7400) 

function yurifade() {
     $(".YuriHexagon").fadeIn(1000);
     $(".YuriSECTION").fadeIn(1000);
     $(".nametagNine").fadeIn(1000);
 }
 setTimeout(yurifade, 7600) 

 function jaisonfade() {
     $(".JaisonHexagon").fadeIn(1000);
     $(".JaisonSECTION").fadeIn(1000);
     $(".nametagTen").fadeIn(1000);
 }
 setTimeout(jaisonfade, 7800)

























 function fadeOutbouncer() {
 	 $(".HexaDANCEone").fadeOut(1000);
 	 $('.HexaDANCEone').animate({'margin-left' : '-1300px'}, {duration: 900, queue: false, easing: "linear"}, function() {});

 	 $(".HexaDANCEtwo").fadeOut(1000);
 	 $('.HexaDANCEtwo').animate({'margin-left' : '-1300px'}, {duration: 900, queue: false, easing: "linear"}, function() {});

 	 $(".HexaDANCEthree").fadeOut(1000);

 	 $(".HexaDANCEfour").fadeOut(1000);
 	 $('.HexaDANCEfour').animate({'margin-left' : '900px'}, {duration: 900, queue: false, easing: "linear"}, function() {});

 	 $(".HexaDANCEfive").fadeOut(1000);
 	 $('.HexaDANCEfive').animate({'margin-left' : '900px'}, {duration: 900, queue: false, easing: "linear"}, function() {});
 }
 setTimeout(fadeOutbouncer, 5600)


});












  

