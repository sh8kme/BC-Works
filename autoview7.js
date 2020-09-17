
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
 var timer = setTimeout(function() {
AV3();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV3() {
 $('a#listing-3-undefined')[0].click();
 var timer = setTimeout(function() {
AV4();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV4() {
 $('a#listing-5-undefined')[0].click();
 var timer = setTimeout(function() {
AV5();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV5() {
 $('a#listing-6-undefined')[0].click();
 var timer = setTimeout(function() {
AV6();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV6() {
 $('a#listing-7-undefined')[0].click();
 var timer = setTimeout(function() {
AV7();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV7() {
 $('a#listing-8-undefined')[0].click();
 var timer = setTimeout(function() {
AV8();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV8() {
 $('a#listing-9-undefined')[0].click();
 }


$(document).ready(function() {
    $(document).on('click', '#Tour', function(event) {
        event.preventDefault();
       AV1();
    });
});
