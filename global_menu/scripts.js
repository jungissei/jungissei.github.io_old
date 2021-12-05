/**------------------------------------------------------
 * グローバルナビ：サブメニュー
 *------------------------------------------------------*/
$(window).on('load', function(){

  global_nav_sub_menu({
    'show_class_name' : 'is_show',//追加クラス
    'sub_menu_selector' : '#global_menu .mega_menu , #global_menu .accordion_menu',//サブメニューアイテムセレクター
    'mouseleave_selector' : '#area_header'//初期化させるホバーアウトのセレクター
  });

  $('body').removeClass('preload');
});

/**
 * サブメニューアイテムにクラス名追加
 * @param {string} arg
 */
function global_nav_sub_menu(arg){
  let show_class_name = arg.show_class_name;
  let sub_menu_selector = $(arg.sub_menu_selector);
  let mouseleave_selector = $(arg.mouseleave_selector);

  if(is_touch_display()){
    let flag = true;

    sub_menu_selector.on('click', function(){

      if(flag != true) return;
      flag = false;
      setTimeout(function(){ flag = true; }, 500);

      toggle_class_global_nav_sub_menu({
        sub_menu_selector : sub_menu_selector,
        show_class_name : show_class_name,
        event_elem : this
      });
    });

  }else{
    sub_menu_selector.on('mouseover', function(){

      add_class_global_nav_sub_menu({
        sub_menu_selector : sub_menu_selector,
        show_class_name : show_class_name,
        event_elem : this
      });
    });

  }

  mouseleave_selector.on('mouseleave', function(){
    initialize_global_nav_sub_menu({
      sub_menu_selector : sub_menu_selector,
      show_class_name : show_class_name
    });
  });
}



/**
 * サブメニュー初期化
 * @param {object} arg
 */
function initialize_global_nav_sub_menu(arg){
  let sub_menu_selector = arg.sub_menu_selector;
  let show_class_name = arg.show_class_name;
  let escape_event_elem = arg.escape_event_elem;

  sub_menu_selector.each(function(){
    if(escape_event_elem && this == escape_event_elem){
      return;
    }

    $(this).removeClass(show_class_name);
  });
}



/**
 * タッチ対応ディスプレイの真偽を返す
 * @returns {bool}
 */
function is_touch_display(){
  let touch_event = window.ontouchstart;
  let touch_points = navigator.maxTouchPoints;

  if(
    touch_event !== undefined
    && 0 < touch_points
  ) {
    return true;
  }

  return false;
}


/**
 * クリックイベントのトグルでサブメニュー表示切替
 * @param {object} params
 */
function toggle_class_global_nav_sub_menu(params) {
  //イベント要素以外初期化
  initialize_global_nav_sub_menu({
    sub_menu_selector : params.sub_menu_selector,
    show_class_name : params.show_class_name,
    escape_event_elem : params.event_elem
  });

  $(params.event_elem).toggleClass(params.show_class_name);
}

/**
 * マウスオーバーイベントでサブメニュー表示
 * @param {object} params
 */
function add_class_global_nav_sub_menu(params) {
  //イベント要素以外初期化
  initialize_global_nav_sub_menu({
    sub_menu_selector : params.sub_menu_selector,
    show_class_name : params.show_class_name,
    escape_event_elem : params.event_elem
  });

  $(params.event_elem).addClass(params.show_class_name);
}




/**------------------------------------------------------
 * エリアヘッダー：スクロール追従
 *------------------------------------------------------*/
/*
* スクロール追従
*/
$(function(){

  //グローバルメニューセレクター
  let global_menu_bg = $('#global_menu>.global_menu_bg');

  //親要素の高さ固定
  let height_num = global_menu_bg.outerHeight(true);
  $('#global_menu').height(height_num);

  //グローバルメニュー座標取得
  let position = $('#global_menu').offset().top + height_num;

  //固定動作
  $(window).on('scroll', function(){
    if(position < $(window).scrollTop()){

      if(global_menu_bg.hasClass('sticky')){
        return;
      }

      global_menu_bg.addClass('sticky');
      global_menu_bg.css('top', - height_num);
      global_menu_bg.animate(
        { top: 0 },
        { queue: false, duration: 300 }
      );
    }else{
      if(!global_menu_bg.hasClass('sticky')){
        return;
      }

      $('#global_menu>.global_menu_bg').removeClass('sticky');
    }
  });

  //スクロールイベント
  $(window).trigger('scroll');
});




/* グローバルメニュー ここまで */
