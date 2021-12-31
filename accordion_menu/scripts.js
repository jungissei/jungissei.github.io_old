let flag = true;
$('.accordion_menu > li').on('click', function(){
  if(flag == false) return;
  flag = false;
  setTimeout(function(){ flag = true; }, 500);

  $(this).toggleClass('is_open');
  $(this).find('.sub_menu').slideToggle();
});
