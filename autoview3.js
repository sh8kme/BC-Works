
function AV1() {
 $('a#listing-4-undefined')[0].click();
 var timer = setTimeout(function() {
AV2();
 	  }, 7000);

 $(".view-work").click(function(){
            clearTimeout(timer);
          
    });
}

function AV2() {
 
            $('a#listing-3-undefined')[0].click();
   
}

function AV3() {
 setTimeout(function() {
            $('a#listing-5-undefined')[0].click();
        }, 7000);
}

function AV4() {
  setTimeout(function() {
            $('a#listing-6-undefined')[0].click();
        }, 7000);
}


$(document).ready(function() {
    $(document).on('click', '#Tour', function(event) {
        event.preventDefault();
       AV1();
    });
});



$(document).ready(function() {
    var timer = setTimeout(function() { $(".button").click(); }, 7000);
    $(".button").click(function(){
            clearTimeout(timer);
            $(this).fadeOut('slow'); 
                $(".leftside").animate({width:'60px'}, 500 );
                $(".rightside").animate({width:'60px'},500 );
    });
});
