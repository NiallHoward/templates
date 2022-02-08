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


    // if( $( ".slides .slide" ).hasClass( "slick-current" ) ){

    //     console.log("test");
        
    //     $(".slides .slide.slick-current .content .left").addClass('go');
    //     $(".slides .slide.slick-current .content .right").addClass('go');
    // }


    $('.stylefive .slides .fade').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $('.stylefive .slides .fade').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides[currentSlide]).removeClass('active-slide');
      $(slick.$slides[nextSlide]).addClass('active-slide');

      console.log( slick.$slides[nextSlide] );
    });

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

    $(document).on('click', '.concertina .heading',function(){
      if( $(this).hasClass('open') ){
        $(this).removeClass('open');
        $(this).parent().children('.text').slideUp(200);
      } else {
        $('.concertina .text').slideUp(200);
        $('.concertina .heading').removeClass('open');
        $(this).parent().children('.text').slideDown(200);
        $(this).addClass('open');
      }
      return false;
    });


    $("#styletwoabout").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .about").offset().top},'slow');
    });
    
    $("#styletwoportfolio").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .portfolio").offset().top},'slow');
    });

    $("#styletwocontact").click(function() {
        $('html,body').animate({
            scrollTop: $(".styletwo .contact").offset().top}, 'slow');
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 350) {
            $('.stylefour #stickynav').addClass('stick');
        }
        if ($(window).scrollTop() < 351) {
            $('.stylefour #stickynav').removeClass('stick');
        }
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 350) {
            $('.stylethree #stickynav').addClass('stick');
        }
        if ($(window).scrollTop() < 351) {
            $('.stylethree #stickynav').removeClass('stick');
        }
    });

});