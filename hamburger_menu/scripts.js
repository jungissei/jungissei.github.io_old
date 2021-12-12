/*----------------------------------------------------------------------------
 * ハンバーガーメニュー
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){
  let arg = {
    'btn' : '#hamburger_menu_btn',//ボタン
    'menu_anchor' : '#hamburger_menu_canvas a[href]',//メニューアンカ
    'canvas' : '#hamburger_menu_canvas',//キャンバス
    'off_canvas' : '#hamburger_menu_off_canvas',//オフキャンバス
    'open_class' : 'is_opened'//開閉クラス
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
});


/**
 * キャンバス・オフキャンバス：トグル
 * @param arg {object} クラス名配列
 */
function hamburger_menu_toggle_canvas(arg){
  $(arg.btn).toggleClass(arg.open_class);

  hamburger_menu_canvas_fade_toggle(arg);
  hamburger_menu_scroll_control(arg.btn, arg.open_class);
}

/**
 * ページ全体のスクロールコントロール
 * @param btn {string} ボタンクラス名
 * @param open_class {string} メニューを開いた時に付与するクラス名
 */
function hamburger_menu_scroll_control(btn, open_class){
  if($(btn).hasClass(open_class)){
    //ページ全体のスクロール無効化
    $('body').css('overflow' , 'hidden');
    return;
  }

  //ページ全体のスクロール無効化解除
  $('body').css('overflow' , '');
}

/**
 * キャンバス表示アニメーション フェードトグル
 * @param arg {object} クラス名配列
 */
function hamburger_menu_canvas_fade_toggle(arg){
  if($(arg.btn).hasClass(arg.open_class)){
    $(arg.canvas + ',' + arg.off_canvas).fadeIn();
    return;
  }

  $(arg.canvas + ',' + arg.off_canvas).fadeOut();
}

/**
 * キャンバススライドトグル(上から)
 * @param arg {object} クラス名配列
 */
function hamburger_menu_canvas_slide_toggle_from_top(arg){
  $(arg.canvas).slideToggle();
  $(arg.off_canvas).fadeToggle();
}

/**
 * キャンバス表示アニメーション スライドトグル(左から)
 * @param arg {object} クラス名配列
 */
function hamburger_menu_canvas_slide_toggle_from_left(arg){
  let speed = 300;

  if($(arg.btn).hasClass(arg.open_class)){
    $(arg.canvas).css({
      'left': '-100%',
      'right': 'auto',
      'opacity': '0',
      'display': ''
    });

    $(arg.canvas).animate({
      'opacity': '1',
      'left': '0'
    }, speed, 'linear');

    $(arg.off_canvas).fadeIn();
  }else{
    $(arg.canvas).animate({
      'opacity': '0',
      'left': '-100%'
    }, speed, 'linear', function(){
      $(arg.canvas).css({
        'left' : '',
        'right' : '',
        'opacity': '',
        'display' : 'none'
      });
    });

    $(arg.off_canvas).fadeOut();
  }
}

/**
 * キャンバス表示アニメーション スライドトグル(右から)
 * @param arg {object} クラス名配列
 */
function hamburger_menu_canvas_slide_toggle_from_right(arg){
  let speed = 300;

  if($(arg.btn).hasClass(arg.open_class)){
    $(arg.canvas).css({
      'right': '-100%',
      'left': 'auto',
      'opacity': '0',
      'display': ''
    });

    $(arg.canvas).animate({
      'opacity': '1',
      'right': '0'
    }, speed, 'linear');

    $(arg.off_canvas).fadeIn();
  }else{
    $(arg.canvas).animate({
      'opacity': '0',
      'right': '-100%'
    }, speed, 'linear', function(){
      $(arg.canvas).css({
        'left' : '',
        'right' : '',
        'opacity': '',
        'display' : 'none'
      });
    });

    $(arg.off_canvas).fadeOut();
  }
}
