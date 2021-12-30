$(window).on('load', function(){
  $('body').removeClass('preload');
});

/**------------------------------------------------------
 * エリアヘッダー
 * # グローバルナビ：アコーディオンメニュー関連
 * - アコーディオンメニュー：トグル
 * - アコーディオンメニュー：テキストを改行させない
 *
 * # エリアヘッダー：スクロール追従
 *------------------------------------------------------*/

/**---------------------------
 * グローバルナビ：アコーディオンメニュー関連
 *---------------------------*/
$(window).on('load', function(){

  //アコーディオンメニュー：トグル
  global_nav_sub_menu({
    'show_class_name' : 'is_show',//追加クラス
    'sub_menu_selector' : '#global_menu .mega_menu , #global_menu .accordion_menu',//アコーディオンメニューアイテムセレクター
    'mouseleave_selector' : '#area_header'//初期化させるホバーアウトのセレクター
  });

  //アコーディオンメニュー：テキストを改行させない
  disable_txt_line_break();
});

/**
 * アコーディオンメニュー：トグル
 *---------------------------*/
/**
 * アコーディオンメニューアイテムにクラス名追加
 * @param {object} arg
 */
function global_nav_sub_menu(arg){
  let show_class_name = arg.show_class_name;
  let sub_menu_selector = $(arg.sub_menu_selector);
  let mouseleave_selector = $(arg.mouseleave_selector);

  if(is_touch_display()){
    let flag = true;

    sub_menu_selector.on('click', function(){

      if(flag == false) return;
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
 * アコーディオンメニュー初期化
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
 * クリックイベントのトグルでアコーディオンメニュー表示切替
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
 * マウスオーバーイベントでアコーディオンメニュー表示
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

/**
 * アコーディオンメニュー：テキストを改行させない
 *---------------------------*/
/**
 * アコーディオンメニューが改行しないpx幅を追加
 */
function disable_txt_line_break() {
  let accordion_menu_li = $('#global_menu .accordion_menu_body li');
      font_size = accordion_menu_li.css('font-size'),
      letter_spacing = accordion_menu_li.css('letter-spacing'),
      padding_right = accordion_menu_li.find('a').css('padding-right');
      padding_left = accordion_menu_li.find('a').css('padding-left');

  $('#global_menu .accordion_menu_body').each(function(){
    let accordion_menu_width = get_global_nav_sub_menu_width(
      $(this).children('li'),
      {
        'font_size' : font_size,
        'letter_spacing' : letter_spacing,
        'padding_left' : padding_right,
        'padding_right' : padding_left
      }
    );

    $(this).css('width', accordion_menu_width);
  });
}

/**
 * アコーディオンメニューが改行しない幅を返す
 * (※最小・最大値有り)
 * @param {object} list_items セレクタ
 * @param {object} css_obj CSS情報
 */
function get_global_nav_sub_menu_width(list_items, css_obj){
  let width = 200,//最小px幅
      max_width = 240;//最大px幅

  list_items.each(function(){

    let span = document.createElement('span');
    $(span).css({
      'font-size' : css_obj.font_size,
      'letter-spacing' : css_obj.letter_spacing,
      'padding-left' : css_obj.padding_left,
      'padding-right' : css_obj.padding_right,
      'display' : 'none',
      'white-space' : 'nowrap'
    });

    $(span).append($(this).text());
    $('body').append(span);

    //小数点が切捨てられるため
    let span_outer_width = $(span).outerWidth();

    if(width < span_outer_width){
      width = span_outer_width;
    }

    if(max_width < span_outer_width){
      width = max_width;
      return;
    }

    $(span).remove();
  });

  return width;
}


/**---------------------------
 * エリアヘッダー：スクロール追従
 *---------------------------*/
$(function(){

  toggle_sticky_area_header({
    'elem' : $('#area_header'),//追従要素の親要素
    'elem_inner' : $('#area_header .area_header_inner'),//追従要素
    'sticky_class' : 'sticky'//追従に追加するクラス名
  });

  //スクロールイベント
  $(window).trigger('scroll');
});

/**
 * エリアヘッダー：スクロール追従
 * @param {object} params
 */
function toggle_sticky_area_header(params) {
  let elem = params.elem;
  let elem_inner = params.elem_inner;
  let sticky_class = params.sticky_class;
  let elem_offset = elem.offset().top;

  $(window).on('scroll', function(){
    if(elem_offset < $(window).scrollTop()){
      if(elem_inner.hasClass(sticky_class)){
        return;
      }

      elem_inner.addClass(sticky_class);
    }else{
      if(!elem_inner.hasClass(sticky_class)){
        return;
      }

      elem_inner.removeClass(sticky_class);
    }
  });
}
