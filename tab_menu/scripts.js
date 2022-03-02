/**
 * タブメニュー
 */
$(function(){

  let flag = true;

  $('#tab_menu .menu_btn li').on('click', function(){

    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    let index = $('#tab_menu .menu_btn li').index(this);
    $('#tab_menu .menu_btn li').removeClass('active');
    $(this).addClass('active');
    $('#tab_menu .menu_body .menu_items').removeClass('is_show').eq(index).addClass('is_show');

  });
});

