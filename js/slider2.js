jQuery(function($) {
var owl = $('.slider-col');
owl.owlCarousel({
    items:50,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
  });
