$(document).ready(function() {
    $(document).on('click', '#Tour', function(event) {
        event.preventDefault();
        $('a#listing-4-undefined')[0].click();
        // $('#left').removeClass('collapsed');
        // $('#left').addClass('halfout');
        setTimeout(function() {
            $('a#listing-3-undefined')[0].click();
        }, 7000);
    });
});