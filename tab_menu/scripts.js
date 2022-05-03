/**
 * タブメニュー
 */
$('#tab_menu .menu_btn li').on('click', function(){

  let index = $('#tab_menu .menu_btn li').index(this);
  $('#tab_menu .menu_btn li').removeClass('is_active');
  $(this).addClass('is_active');
  $('#tab_menu .menu_body .menu_items').removeClass('is_show').eq(index).addClass('is_show');

});
