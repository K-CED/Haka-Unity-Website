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



/* $(document).ready(function(){
  $(".ExpandButton").click(function(){
    $(".ExpandButton").fadeOut(100);
    $('.TransparentContent').animate({'height' : '1080px'}, {duration: 'slow', queue: false}, function() {});
    $('.DescriptionBackground2').animate({'height' : '1020px'}, {duration: 'slow', queue: false}, function() {});
    $('.Content').animate({'height' : '1035px'}, {duration: 'slow', queue: false}, function() {});
    $('.Mission').fadeIn(900);
    $('.Vision').fadeIn(900); 

      });
}); 

*/

$(document).ready(function() {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
    $('.ProductHeading').animate({'font-size' : '40px', 'margin-top' : '-125px'}, {duration: 900, queue: true}, function() {});
    $('.ProductHeading').animate({'font-size' : '20px', 'margin-top' : '-100px'}, {duration: 1000, queue: true}, function() {});
    $('.ProductHeading').animate({'font-size' : '46px', 'margin-top' : '-120px'}, {duration: 1000, queue: true}, function() {});
    $('.ProductHeading').animate({'font-size' : '40px', 'margin-top' : '-120px'}, {duration: 1100, queue: true}, function() {});
    $('#ProductContent').animate({'margin-top' : '-5px'}, {duration: 1000, queue: false}, function() {});

});



/*TIMER BELOW*/

$(document).ready(function() {

  function showdesc() {     
    $("div.hiddentwo").fadeIn(1000);
    $('div.hiddentwo').animate({'margin-left' : '400px'}, {duration: 1500, queue: false}, function() {});
}
 setTimeout(showdesc, 1000)
});




$(document).ready(function() {

  function showLogo() {     
    $("img.hiddenImage").fadeIn(1000);
    $('img.hiddenImage').animate({'margin-left' : '-765px'}, {duration: 1400, queue: false}, function() {});
}
 setTimeout(showLogo, 2000)
});


function NormalLogo() {
  $('img.hiddenImage').animate({'width' : '600px', 'margin-top' : '60px'}, {duration: 500, queue: false}, function() {});
  $('.AppDescription').animate({'margin-left' : '200px', 'margin-right' : '79px'}, {duration: 500, queue: false}, function() {});
  $("p.hiddenmessage").fadeOut(200);
  $('p.hiddenmessage').animate({'margin-left' : '233px', 'margin-top' : '130px' , 'font-size' : '20px'}, {duration: 500, queue: false}, function() {});
  

}


function EnlargeLogo() {
  $('img.hiddenImage').animate({'width' : '670px', 'margin-top' : '30px'}, {duration: 500, queue: false}, function() {});
  $('.AppDescription').animate({'margin-left' : '250px', 'margin-right' : '30px'}, {duration: 500, queue: false}, function() {});
  $("p.hiddenmessage").fadeIn(50);
  $('p.hiddenmessage').animate({'margin-left' : '233px', 'margin-top' : '100px', 'font-size' : '30px'}, {duration: 500, queue: false}, function() {});
}









$(document).ready(function() {
  function showScreenshotHead() {
    $("#OctagonScreenshots").fadeIn(1500);
    $('#OctagonScreenshots').animate({'display' : 'block'}, {duration: 1400, queue: false}, function() {});     
    $(".ScreenshotHeading").fadeIn(1500);
    $('.ScreenshotHeading').animate({'display' : 'block'}, {duration: 1400, queue: false}, function() {});     
}
 setTimeout(showScreenshotHead, 2000)
});









$(document).ready(function() {
  function showScreenshotONE() {
    $("div.hiddenthree").fadeIn(1000);
    $('div.hiddenthree').animate({'margin-top' : '950'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContent").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContent").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}
 setTimeout(showScreenshotONE, 2500)
});

function FirstFeatureIn() {
  $(".toolTipOne").fadeIn(200);
  $('.toolTipOne').animate({'margin-left' : '40', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function FirstFeatureOut() {
  $(".toolTipOne").fadeOut(200);
  $('.toolTipOne').animate({'margin-left' : '40', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonOne() {
  $(".toolTipOne").fadeIn(0);
  $('.toolTipOne').animate({'margin-left' : '40', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonOneAgain() {
  $(".toolTipOne").fadeOut(0);
  $('.toolTipOne').animate({'margin-left' : '40', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContent").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}










$(document).ready(function() {

  function showScreenshotTWO() {

    $("div.hiddenfour").fadeIn(1000);
    $('div.hiddenfour').animate({'margin-top' : '950'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContenttwo").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContenttwo").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}
 setTimeout(showScreenshotTWO, 3000)
});


function SecondFeatureIn() {
  $(".toolTipTwo").fadeIn(200);
  $('.toolTipTwo').animate({'margin-left' : '533', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function SecondFeatureOut() {
  $(".toolTipTwo").fadeOut(200);
  $('.toolTipTwo').animate({'margin-left' : '533', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonTwo() {
  $(".toolTipTwo").fadeIn(0);
  $('.toolTipTwo').animate({'margin-left' : '533', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonTwoAgain() {
  $(".toolTipTwo").fadeOut(0);
  $('.toolTipTwo').animate({'margin-left' : '533', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContenttwo").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}













$(document).ready(function() {
  function showScreenshotTHREE() {
    $("div.hiddenfive").fadeIn(1000);
    $('div.hiddenfive').animate({'margin-top' : '950'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContentthree").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContentthree").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}
 setTimeout(showScreenshotTHREE, 3500)
});

function ThirdFeatureIn() {
  $(".toolTipThree").fadeIn(200);
  $('.toolTipThree').animate({'margin-left' : '1030', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function ThirdFeatureOut() {
  $(".toolTipThree").fadeOut(200);
  $('.toolTipThree').animate({'margin-left' : '1030', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonThree() {
  $(".toolTipThree").fadeIn(0);
  $('.toolTipThree').animate({'margin-left' : '1030', 'margin-top' : '1200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonThreeAgain() {
  $(".toolTipThree").fadeOut(0);
  $('.toolTipThree').animate({'margin-left' : '1030', 'margin-top' : '1300px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentthree").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}





$(document).ready(function() {
  function showScreenshotFOUR() {
    $("div.hiddensix").fadeIn(1000);
    $('div.hiddensix').animate({'margin-top' : '1850'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContentfour").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContentfour").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}
 setTimeout(showScreenshotFOUR, 4000)
});

function FourthFeatureIn() {
  $(".toolTipFour").fadeIn(200);
  $('.toolTipFour').animate({'margin-left' : '40', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function FourthFeatureOut() {
  $(".toolTipFour").fadeOut(200);
  $('.toolTipFour').animate({'margin-left' : '40', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonFour() {
  $(".toolTipFour").fadeIn(0);
  $('.toolTipFour').animate({'margin-left' : '40', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonFourAgain() {
  $(".toolTipFour").fadeOut(0);
  $('.toolTipFour').animate({'margin-left' : '40', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfour").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}





$(document).ready(function() {
  function showScreenshotFIVE() {
    $("div.hiddenseven").fadeIn(1000);
    $('div.hiddenseven').animate({'margin-top' : '1850'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContentfive").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContentfive").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}
 setTimeout(showScreenshotFIVE, 4500)
});

function FifthFeatureIn() {
  $(".toolTipFive").fadeIn(200);
  $('.toolTipFive').animate({'margin-left' : '533', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function FifthFeatureOut() {
  $(".toolTipFive").fadeOut(200);
  $('.toolTipFive').animate({'margin-left' : '533', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonFive() {
  $(".toolTipFive").fadeIn(0);
  $('.toolTipFive').animate({'margin-left' : '533', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonFiveAgain() {
  $(".toolTipFive").fadeOut(0);
  $('.toolTipFive').animate({'margin-left' : '533', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentfive").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}




$(document).ready(function() {
  function showScreenshotSIX() {
    $("div.hiddeneigth").fadeIn(1000);
    $('div.hiddeneigth').animate({'margin-top' : '1850'}, {duration: 1400, queue: false}, function() {});
    $("#AppScreenshotsContentsix").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
    $("#AppScreenshotsContentsix").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}
 setTimeout(showScreenshotSIX, 5000)
});

function SixthFeatureIn() {
  $(".toolTipSix").fadeIn(200);
  $('.toolTipSix').animate({'margin-left' : '1030', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function SixthFeatureOut() {
  $(".toolTipSix").fadeOut(200);
  $('.toolTipSix').animate({'margin-left' : '1030', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");

}

function RetainHexagonSix() {
  $(".toolTipSix").fadeIn(0);
  $('.toolTipSix').animate({'margin-left' : '1030', 'margin-top' : '2100px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").animate({'border-bottom-left-radius' : '70px', 'border-bottom-right-radius' : '70px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, purple 90%)");
}

function RetainHexagonSixAgain() {
  $(".toolTipSix").fadeOut(0);
  $('.toolTipSix').animate({'margin-left' : '1030', 'margin-top' : '2200px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").animate({'border-bottom-left-radius' : '20px', 'border-bottom-right-radius' : '20px'}, {duration: 500, queue: false}, function() {});
  $("#AppScreenshotsContentsix").css("background-image", "linear-gradient(to bottom, white 45%,  white 10%, transparent 90%)");
}













$(document).ready(function() {
  function showSpecsHead() {
    $("#OctagonSpecs").fadeIn(1500);
    $('#OctagonSpecs').animate({'display' : 'block'}, {duration: 1400, queue: false}, function() {});     
    $(".SpecsHeading").fadeIn(1500);
    $('.SpecsHeading').animate({'display' : 'block'}, {duration: 1400, queue: false}, function() {});     
}
 setTimeout(showSpecsHead, 5500)
});


$(document).ready(function() {
  function showSpecsOne() {
    $(".SpecsOne").fadeIn(1500);
    $('.SpecsOne').animate({'display' : 'block', 'margin-left' : '320'}, {duration: 1400, queue: false}, function() {});          
}
 setTimeout(showSpecsOne, 6000)
});

$(document).ready(function() {
  function showSpecsTwo() {
    $(".SpecsTwo").fadeIn(1500);
    $('.SpecsTwo').animate({'display' : 'block', 'margin-left' : '0'}, {duration: 1400, queue: false}, function() {});          
}
 setTimeout(showSpecsTwo, 6000)
});



$(document).ready(function() {
  function showSpecsThree() {
    $(".SpecsThree").fadeIn(1500);
    $('.SpecsThree').animate({'display' : 'block', 'margin-left' : '320'}, {duration: 1400, queue: false}, function() {});          
}
 setTimeout(showSpecsThree, 6000)
});

$(document).ready(function() {
  function showSpecsFour() {
    $(".SpecsFour").fadeIn(1500);
    $('.SpecsFour').animate({'display' : 'block', 'margin-left' : '0'}, {duration: 1400, queue: false}, function() {});          
}
 setTimeout(showSpecsFour, 6000)
});













function SpecInfoOne() {
  $('.SpecsOne').animate({'margin-left' : '520', 'margin-top' : '2850px'}, {duration: 500, queue: false}, function() {});
  $('.Androidies').animate({'margin-left' : '900', 'margin-top' : '-550px'}, {duration: 500, queue: false}, function() {});
  $('.GalaxyS10').animate({'margin-left' : '785'}, {duration: 500, queue: false}, function(){}); 
  $('.P30').animate({'margin-top' : '300'}, {duration: 2000, queue: false}, function() {});
  $('.Oneplus').animate({'margin-top' : '200', 'margin-left' :'1300'}, {duration: 1600, queue: false}, function() {}); 
  $('.Pixel3').animate({'margin-top' : '110'}, {duration: 2000, queue: false}, function() {});
  $('.Xperia').animate({'margin-top' : '400'}, {duration: 2400, queue: false}, function() {});
  $('.S7edge').animate({'margin-top' : '-60', 'margin-left' : '1250'}, {duration: 2100, queue: false}, function() {});
  $('.Vivo').animate({'margin-top' : '-60', 'margin-left' : '1750'}, {duration: 2100, queue: false}, function() {});
  $(".Vivo").fadeIn(200);
  $('.SpecsOne').css("background-color", "lime");
}

function RemoveSpecInfoOne() {
  $('.SpecsOne').animate({'margin-left' : '320', 'margin-top' : '2850px', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.OSDefinition').animate({'margin-left' : '40', 'margin-top' : '180px', 'position' : 'absolute', 'float' : 'left', 'margin-right' : '55'}, {duration: 500, queue: false}, function() {});
  $('.Androidies').animate({'margin-left' : '950', 'margin-top' : '-550px', 'width' : '1200'},   {duration: 500, queue: false}, function() {});
  $('.GalaxyS10').animate({'margin-left' : '1200'}, {duration: 500, queue: false}, function() {}); 
  $('.P30').animate({'margin-top' : '1300'}, {duration: 1100, queue: false}, function() {});
  $('.Oneplus').animate({'margin-top' : '900', 'margin-left' :'1600'}, {duration: 1300, queue: false}, function() {});   
  $('.Pixel3').animate({'margin-top' : '700'}, {duration: 1500, queue: false}, function() {});
  $('.Xperia').animate({'margin-top' : '900'}, {duration: 1700, queue: false}, function() {});
  $('.S7edge').animate({'margin-top' : '-900', 'margin-left' : '1650'}, {duration: 1200, queue: false}, function() {});
  $('.Vivo').animate({'margin-top' : '900', 'margin-left' : '1650'}, {duration: 1200, queue: false}, function() {});
  $(".Vivo").fadeOut(200);
  $('.SpecsOne').css("background-color", "rgba(204, 204, 204, 0)","background-image", "linear-gradient(to right, white 25%,  white 30%, transparent 110%)");
}

function EnlargeOS() {
  $('.SpecsOne').animate({'margin-left' : '0', 'margin-top' : '2850px', 'width' : '1600', 'height' : '600'}, {duration: 500, queue: false}, function() {});
  $('.OSDefinition').animate({'margin-left' : '40', 'margin-top' : '180px', 'position' : 'absolute', 'float' : 'left', 'margin-right' : '760'}, {duration: 500, queue: false}, function() {});
  $('.Androidies').animate({'margin-left' : '1100', 'margin-top' : '-550px', 'width' : '1600'}, {duration: 500, queue: false}, function() {});
  $('.GalaxyS10').animate({'margin-left' : '885', 'margin-top' : '70', 'width' : '300'}, {duration: 500, queue: false}, function() {});
  $('.P30').animate({'margin-top' : '300'}, {duration: 2000, queue: false}, function() {});
  $('.Oneplus').animate({'margin-top' : '200', 'margin-left' :'1300'}, {duration: 1600, queue: false}, function() {}); 
  $('.Pixel3').animate({'margin-top' : '110'}, {duration: 2000, queue: false}, function() {});
  $('.Xperia').animate({'margin-top' : '400'}, {duration: 2400, queue: false}, function() {});
  $('.S7edge').animate({'margin-top' : '-60', 'margin-left' : '1250'}, {duration: 2100, queue: false}, function() {});
  $('.Vivo').animate({'margin-top' : '-60', 'margin-left' : '1050'}, {duration: 2100, queue: false}, function() {});
  $(".Vivo").fadeIn(200);
  $('.SpecsOne').css("background-color", "lime");

      
}

function ResetOS() {
  $('.SpecsOne').animate({'margin-left' : '320', 'margin-top' : '2850px', 'width' : '1200', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.OSDefinition').animate({'margin-left' : '40', 'margin-top' : '180px', 'position' : 'absolute', 'float' : 'left', 'margin-right' : '40'}, {duration: 500, queue: false}, function() {});
  $('.Androidies').animate({'margin-left' : '1100', 'margin-top' : '-550px', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.GalaxyS10').animate({'margin-left' : '1200', 'margin-top' : '-50', 'width' : '200'}, {duration: 500, queue: false}, function() {});
  $('.P30').animate({'margin-top' : '1300'}, {duration: 1100, queue: false}, function() {});
  $('.Oneplus').animate({'margin-top' : '900', 'margin-left' :'1600'}, {duration: 1300, queue: false}, function() {});   
  $('.Pixel3').animate({'margin-top' : '700'}, {duration: 1500, queue: false}, function() {});
  $('.Xperia').animate({'margin-top' : '900'}, {duration: 1700, queue: false}, function() {});
  $('.S7edge').animate({'margin-top' : '-900', 'margin-left' : '1650'}, {duration: 1200, queue: false}, function() {});
  $('.Vivo').animate({'margin-top' : '900', 'margin-left' : '1650'}, {duration: 1200, queue: false}, function() {});
  $(".Vivo").fadeOut(200);
  $('.SpecsOne').css("background-color", "lime");
} 



function showChrometext() {
  $('.IconOne').animate({'font-size' : '15', 'margin-left' : '85' }, {duration: 200, queue: false}, function() {});

}

function hideChrometext() {
  $('.IconOne').animate({'font-size' : '10', 'margin-left' : '105'}, {duration: 200, queue: false}, function() {});
}



function showYTtext() {
  $('.IconTwo').animate({'font-size' : '15', 'margin-left' : '263' }, {duration: 200, queue: false}, function() {});

}

function hideYTtext() {
  $('.IconTwo').animate({'font-size' : '10', 'margin-left' : '273'}, {duration: 200, queue: false}, function() {});
}



function showDiscordtext() {
  $('.IconThree').animate({'font-size' : '15', 'margin-left' : '415' }, {duration: 200, queue: false}, function() {});

}

function hideDiscordtext() {
  $('.IconThree').animate({'font-size' : '10', 'margin-left' : '425'}, {duration: 200, queue: false}, function() {});
}


function showMMtext() {
  $('.IconFour').animate({'font-size' : '15', 'margin-left' : '547' }, {duration: 200, queue: false}, function() {});

}

function hideMMtext() {
  $('.IconFour').animate({'font-size' : '10', 'margin-left' : '561'}, {duration: 200, queue: false}, function() {});
}


function showReacttext() {
  $('.IconFive').animate({'font-size' : '15', 'margin-left' : '680' }, {duration: 200, queue: false}, function() {});

}

function hideReacttext() {
  $('.IconFive').animate({'font-size' : '10', 'margin-left' : '701'}, {duration: 200, queue: false}, function() {});
}























function SpecInfoTwo() {
  $('.SpecsTwo').animate({'margin-left' : '-200', 'margin-top' : '3050'}, {duration: 500, queue: false}, function() {});
  $('.Ramies').animate({'margin-left' : '-1100', 'margin-top' : '-550' }, {duration: 500, queue: false}, function() {});
  $('.ramchip').animate({'margin-left' : '-165'}, {duration: 500, queue: false}, function() {});
  $('.SpecsTwo').css("background-color", "yellow");
}


function RemoveSpecInfoTwo() {
  $('.SpecsTwo').animate({'margin-left' : '-20', 'margin-top' : '3050', 'height' : '150', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.Ramies').animate({'margin-left' : '-1130', 'margin-top' : '-550', 'width' : '1200'},   {duration: 500, queue: false}, function() {}); 
  $('.ramchip').animate({'margin-left' : '-590'}, {duration: 500, queue: false}, function() {});
  $('.SpecsTwo').css("background-color", "rgba(204, 204, 204, 0)","background-image", "linear-gradient(to left, white 25%,  white 30%, transparent 110%)");
}



function EnlargeRAM() {
  $('.SpecsTwo').animate({'margin-left' : '-80', 'margin-top' : '3050px', 'width' : '1600', 'height' : '600'}, {duration: 500, queue: false}, function() {});
  $('.RAMDefinition').animate({'margin-left' : '730', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'right', }, {duration: 500, queue: false}, function() {});
  $('.Ramies').animate({'margin-left' : '-1730', 'margin-top' : '-550', 'width' : '1600'}, {duration: 500, queue: false}, function() {}); 
  $('.ramchip').animate({'margin-left' : '-380', 'margin-top' : '160', 'width' : '350'}, {duration: 500, queue: false}, function() {});
  $('.SpecsTwo').css("background-color", "yellow");   
}

function ResetRAM() {
  $('.SpecsTwo').animate({'margin-left' : '-200', 'margin-top' : '3050px', 'width' : '1200', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.RAMDefinition').animate({'margin-left' : '230', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'right'}, {duration: 500, queue: false}, function() {});
  $('.Ramies').animate({'margin-left' : '-1100', 'margin-top' : '-550', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.ramchip').animate({'margin-left' : '-590', 'margin-top' : '10', 'width' : '150'}, {duration: 500, queue: false}, function() {});
  $('.SpecsTwo').css("background-color", "yellow");
} 



















function SpecInfoThree() {
  $('.SpecsThree').animate({'margin-left' : '520', 'margin-top' : '3250'}, {duration: 500, queue: false}, function() {});
  $('.Chipset').animate({'margin-left' : '-150'}, {duration: 500, queue: false}, function(){}); 
  $('.CPU').animate({'margin-left' : '-150', 'margin-top' : '-550'}, {duration: 500, queue: false}, function() {});
  $('.SpecsThree').css("background-color", "blue");
}


function RemoveSpecInfoThree() {
  $('.SpecsThree').animate({'margin-left' : '320', 'margin-top' : '3250', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.Chipset').animate({'margin-left' : '400'}, {duration: 500, queue: false}, function() {});
  $('.CPU').animate({'margin-left' : '-100', 'margin-top' : '-550', 'width' : '1200'},   {duration: 500, queue: false}, function() {});
  $('.SpecsThree').css("background-color", "rgba(204, 204, 204, 0)","background-image", "linear-gradient(to right, white 25%,  white 30%, transparent 110%)");
  $(".border").css("height", "1025");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%, transparent 76.3%, red 76.8%, maroon 90.8%)");
  $(".VideoHeading").animate({'margin-top' : '3740'}, {duration: 500, queue: false}, function() {});
  $(".VideoText").animate({'margin-top' : '3752'}, {duration: 500, queue: false}, function() {});
  $(".appteaser").animate({'margin-top' : '3900'}, {duration: 500, queue: false}, function() {});
  $(".instructions").animate({'margin-top' : '3740px'}, {duration: 500, queue: false}, function() {});
}


function EnlargeCHIP() {
  $('.SpecsThree').animate({'margin-left' : '0', 'margin-top' : '3250', 'width' : '1600', 'height' : '600'}, {duration: 500, queue: false}, function() {});
  $('.CHIPDefinition').animate({'margin-left' : '40', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'left', 'margin-right' : '760'}, {duration: 500, queue: false}, function() {});
  $('.Chipset').animate({'margin-left' : '-150', 'margin-top' : '140', 'width' : '350'}, {duration: 500, queue: false}, function() {});
  $('.CPU').animate({'margin-left' : '-150', 'margin-top' : '-550', 'width' : '1600'}, {duration: 500, queue: false}, function() {});
  $('.SpecsThree').css("background-color", "blue");
  $(".border").css("height", "1275");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%, transparent 81.3%, red 82%, maroon 90.8%, black)");
  $(".VideoHeading").css("margin-top", "3990px");
  $(".VideoText").css("margin-top", "4005px");
  $(".appteaser").css("margin-top", "4150px");
  $(".instructions").css("margin-top", "3990px");

}

function ResetCHIP() {
  $('.SpecsThree').animate({'margin-left' : '320', 'margin-top' : '3250', 'width' : '1200', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.CHIPDefinition').animate({'margin-left' : '40', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'left', 'margin-right' : '40'}, {duration: 500, queue: false}, function() {});
  $('.Chipset').animate({'margin-left' : '400', 'margin-top' : '10', 'width' : '150' }, {duration: 500, queue: false}, function() {});
  $('.CPU').animate({'margin-left' : '0', 'margin-top' : '-550', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.SpecsThree').css("background-color", "blue");
  $(".border").css("height", "1025");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%, transparent 76.3%, red 76.8%, maroon 90.8%)");
  $(".VideoHeading").animate({'margin-top' : '3740'}, {duration: 500, queue: false}, function() {});
  $(".VideoText").animate({'margin-top' : '3752'}, {duration: 500, queue: false}, function() {});
  $(".appteaser").animate({'margin-top' : '3900'}, {duration: 500, queue: false}, function() {});
  $(".instructions").animate({'margin-top' : '3740'}, {duration: 500, queue: false}, function() {});
} 

















function SpecInfoFour() {
  $('.SpecsFour').animate({'margin-left' : '-200', 'margin-top' : '3450px'}, {duration: 500, queue: false}, function() {});
  $('.ROM').animate({'margin-left' : '-20'}, {duration: 500, queue: false}, function() {});
  $('.Storage').animate({'margin-left' : '-1050', 'margin-top' : '-550px'}, {duration: 500, queue: false}, function() {});
  $('.SpecsFour').css("background-color", "red");
}


function RemoveSpecInfoFour() {
  $('.SpecsFour').animate({'margin-left' : '0', 'margin-top' : '3450px', 'height' : '150', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.ROM').animate({'margin-left' : '-590'}, {duration: 500, queue: false}, function() {});
  $('.Storage').animate({'margin-left' : '-1100', 'margin-top' : '-550px', 'width' : '1200'},   {duration: 500, queue: false}, function() {});
  $('.SpecsFour').css("background-color", "rgba(204, 204, 204, 0)","background-image", "linear-gradient(to left, white 25%,  white 30%, transparent 110%)");
  $(".border").css("height", "1025");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%,  transparent 76.3%, red 76.8%, maroon 90.8%)");
  $(".VideoHeading").animate({'margin-top' : '3740'}, {duration: 500, queue: false}, function() {});
  $(".VideoText").animate({'margin-top' : '3752'}, {duration: 500, queue: false}, function() {});
  $(".appteaser").animate({'margin-top' : '3900'}, {duration: 500, queue: false}, function() {});
  $(".instructions").animate({'margin-top' : '3740px'}, {duration: 500, queue: false}, function() {});
}


function EnlargeROM() {
  $('.SpecsFour').animate({'margin-left' : '-80', 'margin-top' : '3450px', 'width' : '1600', 'height' : '600'}, {duration: 500, queue: false}, function() {});
  $('.ROMDefinition').animate({'margin-left' : '730', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'right', }, {duration: 500, queue: false}, function() {});
  $('.ROM').animate({'margin-left' : '-220', 'margin-top' : '160', 'width' : '350'}, {duration: 500, queue: false}, function() {}); 
  $('.Storage').animate({'margin-left' : '-1500', 'margin-top' : '-550', 'width' : '1600'}, {duration: 500, queue: false}, function() {}); 
  $('.SpecsFour').css("background-color", "red");   
  $(".border").css("height", "1480");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%, transparent 85.4%, red 85.8%, maroon 90.8%, black)");
  $(".VideoHeading").css("margin-top", "4190px");
  $(".VideoText").css("margin-top", "4205px");
  $(".appteaser").css("margin-top", "4350px");
  $(".instructions").css("margin-top", "4190px");
}

function ResetROM() {
  $('.SpecsFour').animate({'margin-left' : '-200', 'margin-top' : '3450px', 'width' : '1200', 'height' : '150'}, {duration: 500, queue: false}, function() {});
  $('.ROMDefinition').animate({'margin-left' : '230', 'margin-top' : '180', 'position' : 'absolute', 'float' : 'right'}, {duration: 500, queue: false}, function() {});
  $('.ROM').animate({'margin-left' : '-590', 'margin-top' : '10', 'width' : '150'}, {duration: 500, queue: false}, function() {}); 
  $('.Storage').animate({'margin-left' : '-1300', 'margin-top' : '-550', 'width' : '1200'}, {duration: 500, queue: false}, function() {});
  $('.SpecsFour').css("background-color", "red");
  $(".border").css("height", "1025");
  $("#ProductContent").css("background-image", "linear-gradient(to bottom, transparent 15.3%, #010029 16%, fuchsia 55.6%, transparent 55.9%,  transparent 76.3%, red 76.8%, maroon 90.8%)");
  $(".VideoHeading").animate({'margin-top' : '3740'}, {duration: 500, queue: false}, function() {});
  $(".VideoText").animate({'margin-top' : '3752'}, {duration: 500, queue: false}, function() {});
  $(".appteaser").animate({'margin-top' : '3900'}, {duration: 500, queue: false}, function() {});
  $(".instructions").animate({'margin-top' : '3740px'}, {duration: 500, queue: false}, function() {});
} 





  function showTrailerContent() {
    $(".VideoHeading").fadeIn(1500); 
    $(".VideoText").fadeIn(1500);      
    $(".appteaser").fadeIn(1500); 
    $(".instructions").fadeIn(1500);

    $(".InfomercialHeading").fadeIn(1500); 
    $(".InfomercialText").fadeIn(1500);      
    $(".infomercial").fadeIn(1500); 

    $(".PitchingHeading").fadeIn(1500); 
    $(".PitchingText").fadeIn(1500);      
    $(".pitching").fadeIn(1500); 

    $(".SolutionHeading").fadeIn(1500); 
    $(".SolutionText").fadeIn(1500);      
    $(".solution").fadeIn(1500); 
}
 setTimeout(showTrailerContent, 6500)






