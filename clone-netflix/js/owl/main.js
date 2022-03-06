var owl = $('.owl-carousel').owlCarousel({
    dots: false,
    center: true,
    loop:true,
    margin:10,
    nav:false,
    slideTransition: 'linear',
    autoplay:true,
    autoplaySpeed: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
        owl.trigger('stop.owl.autoplay')
        owl.trigger('play.owl.autoplay',[2500])
    } else {
        owl.trigger('prev.owl');
        owl.trigger('stop.owl.autoplay')
        owl.trigger('play.owl.autoplay',[2500])
    }
    e.preventDefault();
});

$( document ).ready(function() {
    $(".owl-carousel").owlCarousel({
        navigation : false 
       });
    owl.trigger('play.owl.autoplay',[2500])
});