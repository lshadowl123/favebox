var owl = $('.slider-col');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[8000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
