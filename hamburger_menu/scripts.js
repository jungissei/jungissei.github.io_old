$(window).on('load', function(){
  $('body').removeClass('preload');
});


/*----------------------------------------------------------------------------
 * ハンバーガーメニュー
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){
  let arg = {
    'btn' : '#hamburger_menu_btn',//ボタン
    'menu_anchor' : '#hamburger_menu_canvas a[href]',//メニューアンカ
    'canvas' : '#hamburger_menu_canvas',//キャンバス
    'off_canvas' : '#hamburger_menu_canvas .hamburger_menu_canvas_off',//オフキャンバス
    'open_class' : 'is_opened',//開閉クラス
    'animation_item' : '#hamburger_menu_canvas .menu_animation_item'//アニメーションアイテム
  }

  let flag = true;

  /**
   * ボタン押下時
   */
  $(arg.btn).on('click', function(){
    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    hamburger_menu_toggle_canvas(arg);
  });

  //キャンバス内リンク押下時
  $(arg.menu_anchor).on('click', function(){
    if($(this).attr('target')) return;

    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    hamburger_menu_toggle_canvas(arg);
  });

  //オフキャンバス押下時
  $(arg.off_canvas).on('click', function(){
    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    hamburger_menu_toggle_canvas(arg);
  });

  //ハンバーグメニュー内のanimation-delay追加
  add_humburger_inner_menu_animation_delay(arg.animation_item);
});


/**
 * キャンバス・オフキャンバス：トグル
 * @param {object} arg クラス名配列
 */
function hamburger_menu_toggle_canvas(arg){
  $(arg.btn + ',' + arg.canvas).toggleClass(arg.open_class);
  hamburger_menu_scroll_control(arg.btn, arg.open_class);
}

/**
 * ページ全体のスクロールコントロール
 * @param {string} btn ボタンクラス名
 * @param {string} open_class メニューを開いた時に付与するクラス名
 */
function hamburger_menu_scroll_control(btn, open_class){

  if($(btn).hasClass(open_class)){

    let scroll_bar_width = parseInt(window.innerWidth - $(window).width());

    //body：ページ全体のスクロール無効化
    $('body').css({
      'overflow' : 'hidden',
      'padding-right' : scroll_bar_width,
    });

    //ハンバーガーメニュー ボタン
    $(btn).css({
      'right' : parseInt($(btn).css('right')) + scroll_bar_width
    });

    return;
  }

  //ページ全体のスクロール無効化解除
  $('body').css({
    'overflow' : '',
    'padding-right' : '',
  });

  //ハンバーガーメニュー ボタン
  $(btn).css({
    'right' : ''
  });
}

/**
 * ハンバーグメニュー内のanimation-delay追加
 * @param {string} animation_item アニメーションアイテム
 */
function add_humburger_inner_menu_animation_delay(animation_item) {
  let cur_deley = 0,
      increment_deley = 0.05;

  $(animation_item).each(function(){
    $(this).css('transition-delay', cur_deley + 's');
    cur_deley = get_humburger_inner_menu_animation_delay(cur_deley, increment_deley);
  });
}

/**
 * animation-delay追加
 * @param {int} cur_deley 現在の遅延秒数
 * @param {int} increment_deley 遅延秒数
 */
function get_humburger_inner_menu_animation_delay(cur_deley, increment_deley) {
  return cur_deley + increment_deley;
}

