
function AV1() {
 $('a#listing-4-undefined')[0].click();
 setTimeout(function() {
$(".view-work").click(function(){
    var $this = $(this);
    if($this.data('clicked')) {
       AV2();
    }
    else {
       
    }
});
 	  }, 7000);
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


