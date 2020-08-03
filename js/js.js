$(document).ready(function(){

    // $('.portfolio .banners').slick({
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
        console.log("testa");
        $('html,body').animate({
            scrollTop: $(".blog .about").offset().top},'slow');
    });
    
    $("#blogportfolio").click(function() {
        console.log("test");
        $('html,body').animate({
            scrollTop: $(".blog .portfolio").offset().top},'slow');
    });

    $("#blogcontact").click(function() {
        console.log("testc");
        $('html,body').animate({
            scrollTop: $(".blog .contact").offset().top},'slow');
    });

});