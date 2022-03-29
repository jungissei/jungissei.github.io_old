/**----------------------------------------------------------------------------
 * TOPへ戻るボタン・クッキー同意
 *----------------------------------------------------------------------------*/
/**--------------------------------------
 * TOPへ戻るボタン
 *--------------------------------------*/
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


/**--------------------------------------
 * クッキー同意
 *--------------------------------------*/
$(function(){
  let expire = 365;//有効期限（日）
  let area_cookie = $('#area_cookie');
  let btn = $('.cookie_agree');
  let flag = localStorage.getItem('area_cookie_flag');

  //クッキー表示エリア表示フラグをセット
  set_cookie_area_show_flag(flag, expire, area_cookie);

  //ボタン押下時
  btn.on('click', function(){
    area_cookie.removeClass('is_show');
    set_with_expiry('area_cookie_flag', 'false', expire);
  });
});

/**
 * クッキー表示エリア表示フラグをセット
 * @param {object} flag ローカルストレージに保存されている値
 * @param {int} expire 期限切れになる日数
 * @param {object} area_cookie クッキー表示エリア
 */
function set_cookie_area_show_flag(flag, expire, area_cookie){
  //初回アクセス時
  if (flag === null) {
    set_with_expiry('area_cookie_flag', 'true', expire);
    show_area_cookie(area_cookie);
    return;
  }

  //2回目以降アクセス時
  let data = JSON.parse(flag);
  if (data['value'] == 'true') {
    show_area_cookie(area_cookie);
    return;
  }

  //期限切れ時
  let current = new Date();
  if (current.getTime() > data['expire']) {
    set_with_expiry('area_cookie_flag', 'true', expire);
    show_area_cookie(area_cookie);
  }
}


/**
 * ローカルストレージに値をセット
 * @param {string} key ローカルストレージキー
 * @param {string} value 表示真偽(ローカルストレージのため文字列)
 * @param {int} expire 期限切れになる日数
 */
function set_with_expiry(key, value, expire) {
  let current = new Date();
  expire = current.getTime() + expire * 24 * 3600 * 1000;
  let item = {
    value: value,
    expire: expire
  };
  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * クッキー表示エリア
 * @param {object} area_cookie クッキー表示エリア
 */
function show_area_cookie(area_cookie) {
  area_cookie.addClass('is_show');
}



/**--------------------------------------
 * TOPへ戻るボタン・クッキー同意連動関連
 *--------------------------------------*/
/**
 * ページTOPへ戻るボタン位置調整
 */
$(window).on('load scroll resize', function(){
	if($('#area_cookie').hasClass('is_show')){
    fix_position_page_top_btn();
    return;
  }

  reset_position_page_top_btn();
});

/**
 * クッキー同意時
 */
$('.cookie_agree').on('click', function(){
  reset_position_page_top_btn();
});

/**
 * ページTOPへ戻るボタン位置調整(クッキー表示エリア表示時)
 */
function fix_position_page_top_btn(){
  let between_space = window.matchMedia( "(max-width: 768px)" ).matches?
    15 : 40;

  let bottom_position = $('#area_cookie').outerHeight() + between_space;
  $('#arrow_to_top').css('bottom', bottom_position);
}

function reset_position_page_top_btn(){
  $('#arrow_to_top').css('bottom', '');
}
