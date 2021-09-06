/* ホバーメニュー ここから */
$(window).on('load', function(){
  $('#hover_menu .hover_menu_btn li').hover(function() {

    let index = $('#hover_menu .hover_menu_btn li').index(this);
    $('#hover_menu .hover_menu_btn li').removeClass('active');
    $(this).addClass('active');
    $('#hover_menu .hover_menu_body_wrp .hover_menu_body').removeClass('show').eq(index).addClass('show');

  });
});
/* ホバーメニュー ここまで */
