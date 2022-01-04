
$(window).on('load', function(){
  let controller = new ScrollMagic.Controller();

  let demo1 = new ScrollMagic.Scene({
    triggerElement: '.area_demo1'
  });
  demo1.on('enter', function(e) {
    $('.area_demo1 .area_demo_ttl, .area_demo1 .area_demo_body').addClass('in_view');
  })
  .addTo(controller);



  let demo2 = new ScrollMagic.Scene({
    triggerElement: '.area_demo2'
  });
  demo2.on('enter', function(e) {
    $('.area_demo2 .animation_item').each(function(i){
      $(this).delay(300 * i).queue(function(){
        $(this).addClass('in_view');
      });
    });
  })
  .addTo(controller);


  let demo3 = new ScrollMagic.Scene({
    triggerElement: '.area_demo3'
  });
  demo3.on('enter', function(e) {
    $('.area_demo3 .animation_item').each(function(i){
      $(this).delay(2000 * i).queue(function(){
        $(this).addClass('in_view');
      });
    });
  })
  .addTo(controller);
});
