$(document).ready(function(){

    // $('.styleone .banners').slick({
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     fade: true,
    //     // cssEase: 'linear',
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    // $('.styletwo .images-container').slick({
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     fade: true,
    //     // cssEase: 'linear',
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });


    // $('.stylethree .gallery-wrap').slick({
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     // fade: true,
    //     // cssEase: 'linear',
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    // });

    $(".sidebar .slide").click(function(){
        if( $(".sidebar").hasClass('open') ){
            $(".sidebar").removeClass("open");
        } else {
            $(".sidebar").addClass('open');
        }
    });

     $(".sidebar .side .nav .theme").click(function(){
        $(".sidebar .side .nav .theme").removeClass("active");    
        $(this).addClass('active');
        
        var name = this.getAttribute('id');
        var active = ".template." + name;

        if ( $(active).hasClass('active') ){
        } else {
            $(".template").removeClass("active");
            $(active).addClass('active');
        }
    });

    $("#blogabout").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .about").offset().top},'slow');
    });
    
    $("#blogportfolio").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .portfolio").offset().top},'slow');
    });

    $("#blogcontact").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .contact").offset().top}, 'slow');
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $('#stickynav').addClass('stick');
        }
        if ($(window).scrollTop() < 251) {
            $('#stickynav').removeClass('stick');
        }
    });

});