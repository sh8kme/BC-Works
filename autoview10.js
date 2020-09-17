
function AV1() {
 $('a#listing-4-undefined')[0].click();
 var timer = setTimeout(function() {
AV2();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          $(".close").click(function(){
         AV2();
    });
    });
}

function AV2() {
	$( ".close" ).unbind();
 $('a#listing-2-undefined')[0].click();
 $('.mapboxgl-popup-content').append('text');
 var timer = setTimeout(function() {
AV3();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
  $(".close").click(function(){
         AV3();
    });
    });
}


function AV3() {
	$( ".close" ).unbind();
 $('a#listing-3-undefined')[0].click();
 var timer = setTimeout(function() {
AV4();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
  $(".close").click(function(){
         AV4();
    });
    });
}


function AV4() {
	$( ".close" ).unbind();
 $('a#listing-5-undefined')[0].click();
 var timer = setTimeout(function() {
AV5();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
  $(".close").click(function(){
         AV5();
    });
    });
}


function AV5() {
	$( ".close" ).unbind();
 $('a#listing-6-undefined')[0].click();
 var timer = setTimeout(function() {
AV6();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
 $(".close").click(function(){
         AV6();
    });
    });
}


function AV6() {
	$( ".close" ).unbind();
 $('a#listing-7-undefined')[0].click();
 var timer = setTimeout(function() {
AV7();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
  $(".close").click(function(){
         AV7();
    });
    });
}


function AV7() {
	$( ".close" ).unbind();
 $('a#listing-8-undefined')[0].click();
 var timer = setTimeout(function() {
AV8();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
  $(".close").click(function(){
         AV8();
    });
    });
}

function AV8() {
	$( ".close" ).unbind();
 $('a#listing-9-undefined')[0].click();

  setTimeout(() => { 
    $('.mapboxgl-popup-close-button')[0].click();
    }, 7000);
}


$(document).ready(function() {
    $(document).on('click', '#Tour', function(event) {
        event.preventDefault();
       AV1();
    });
});
