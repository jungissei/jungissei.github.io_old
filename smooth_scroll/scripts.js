/*----------------------------------------------------------------------------
 * スムーズスクロール
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){
  let offset = window.matchMedia( "(max-width: 768px)" ).matches?
    -50 : -70;

  if($(location.hash).length){
    $.smoothScroll({
      scrollTarget: location.hash,
      offset: offset,
    });
  }

  $('a').smoothScroll({
    offset: offset
  });
});
