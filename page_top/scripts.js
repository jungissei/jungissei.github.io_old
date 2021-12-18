/**------------------------------------------------------
 * TOPへ戻るボタン
 *------------------------------------------------------*/
$(window).on('load scroll', function(){
  //TOPへ戻るボタン
  page_top({
    btn_id : 'arrow_to_top',
    top_section : 'header',
    bottom_section : 'footer'
  });
});

/**
 * TOPへ戻るボタン
 * @param {object} arg 基本情報
 */
function page_top(arg){
  let btn_elem = document.getElementById(arg.btn_id),
      curr_window_top_line = $(this).scrollTop(),
      curr_window_bottom_line = $(window).height() + curr_window_top_line,
      top_section = $(arg.top_section),
      top_section_bottom_line = top_section.offset().top + top_section.height(),
      bottom_section_top_line = $(arg.bottom_section).offset().top;

  //ボタン非表示
  if(curr_window_top_line < top_section_bottom_line){
    btn_elem.setAttribute('class', '');
    return;
  }

  //ボタン固定配置
  if(curr_window_bottom_line < bottom_section_top_line){
    btn_elem.setAttribute('class', 'is_fixed');
    return;
  }

  //ボタン絶対配置
  btn_elem.setAttribute('class', 'is_absolute');
}
