$(document).ready(function () {
    $(window).load(function () {
        $(".preloader").addClass("preloader-hidden").fadeOut(600);

    });
    
//    window.onload = function() {
//           $(".header-text").delay( 2000 );
//        
//    };

    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {
            $(".top-header").addClass("header-scrolled");
        } else {
            $(".top-header").removeClass("header-scrolled");
        }
    });


    $(".nav li").hover(
        function () {
            $(this).children('ul').hide();
            $(this).children('ul').slideDown('fast');
        },
        function () {
            $('ul', this).slideUp('fast');
        });
    
});