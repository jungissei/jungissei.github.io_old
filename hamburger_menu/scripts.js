/*----------------------------------------------------------------------------
 * ハンバーガーメニュー
 *----------------------------------------------------------------------------*/
$(function(){
  let args = {
    'btn_selector' : $('#hamburger_menu > .menu_btn'),
    'body_class' : '.hamburger_menu_body',
    'open_class' : 'is_opened'
  };

  let flag = true;
  $("#hamburger_menu > .menu_btn").on('click', function(){
    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    // args = { 'scroll_control' : true }
    toggle_hamburger_menu(args);
  });

  $("#hamburger_menu > .hamburger_menu_body a[href]").on('click', function(){
    if($(this).attr('target')) return;

    // args = { 'scroll_control' : false }
    toggle_hamburger_menu(args);
  });
});



/**
 * ハンバーガーメニューボタン：トグル
 * @param {object} 設定情報
 */
function toggle_hamburger_menu(args){
  let btn = args.btn_selector;
  btn.toggleClass(args.open_class);
  btn.next('.hamburger_menu_body').fadeToggle();

  let menu_body_opened = (btn.hasClass(args.open_class))? true: false;
  scroll_control_hamburger_menu(menu_body_opened);
}



/**
 * ハンバーガーメニュー開閉時：スクロールコントール
 * @param {bool} menu_body_opened
 */
function scroll_control_hamburger_menu(menu_body_opened){
  if(menu_body_opened){
    //ページ全体のスクロール無効化
    disable_scroll_body();
    return;
  }

  //ページ全体のスクロール無効化解除
  enable_scroll_body();
}

/**
 * ページ全体のスクロール無効化
 */
function disable_scroll_body() {
  $('body').css({
    'overflow' : 'hidden',
    'position' : 'fixed',
    'top' : - $(window).scrollTop()
  });

  document.addEventListener(
    'touchmove',
    scroll_control_for_touchmove,
  );
}

/**
 * ページ全体のスクロール無効化解除
 */
function enable_scroll_body() {
  let scroll_y = document.body.style.top;

  $('body').css({
    'overflow' : '',
    'position' : '',
    'top' : ''
  });

  window.scrollTo(0, parseInt(scroll_y || '0') * -1);

  document.removeEventListener(
    'touchmove',
    scroll_control_for_touchmove,
  );
}

/**
 * touchmoveイベントコントロール
 * @param {object} イベントオブジェクト
 */
function scroll_control_for_touchmove(e) {
  if ($(e.target).closest('.hamburger_menu_body').length) {
    e.stopPropagation();
    return;
  }

  e.preventDefault();
};
