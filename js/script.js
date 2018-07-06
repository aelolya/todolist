$(document).ready(function() {
    $('#button1').click(
            function(){
                var toAdd = $('input[name=inputList]').val();
                 $('ul').append('<li>' + toAdd + '</li>');
    });
    

    $('#button1').click(function() {
        $('input[name=inputList]').val("");
    });

    $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
    });

    if ($('#back-to-top').length) {
        var scrollTrigger = 25, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
                $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

});