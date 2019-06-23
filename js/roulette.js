var $icons = $('#roulette');
 function loopImg(){
    var $first = $icons.find('.roulette-img img:first-child');
   $first.animate({
    'marginLeft': '-='+ $first.outerWidth(true) +'px'
    }, 5000, 'linear', function(){
    $first.clone().removeAttr('style').appendTo($first.parent());
    $first.remove();
   loopImg();
  });
 }
 loopImg();
