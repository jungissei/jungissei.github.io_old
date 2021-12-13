/*----------------------------------------------------------------------------
 * スムーズスクロール
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){

  let arg = {
    header_fixed_height_pc : 70,//PC時の固定ヘッダーの高さ
    header_fixed_height_sp : 50//SP時の固定ヘッダーの高さ
  };

  smooth_scroll(
    $( location ).attr('hash'),
    arg
  );

  //appendさせたアンカーリンクを動かすため、onload内に設置
  $('a[href*="#"]').click(function(){
    smooth_scroll(
      $(this)[0].hash,
      arg
    );
    return false;
  });
});

/**
 * スムーズスクロール
 * @param {string} hash ハッシュ値
 * @param {object} arg 設定値オブジェクト
 */
function smooth_scroll(hash, arg){
  //動作条件
  if(is_available_for_smooth_scroll(hash)){

    let adjust_scroll_top = get_adjust_scroll_top(hash, arg);

    $('html, body').animate(
      { scrollTop: $(hash).offset().top - adjust_scroll_top},
      500,
      'swing'
    );
  }
}

/**
 * @param {string} hash ハッシュ値
 * @return {bool} スムーズスクロール 動作条件
 */
function is_available_for_smooth_scroll(hash){
  //ハッシュ値が空の時
  if(hash == '#' || hash == '')
    return false;

  //ターゲット要素が存在しない時
  if($(hash).length == 0)
    return false;

  return true;
}

/**
 * @param {string} hash ハッシュ値
 * @param {object} arg 設定値オブジェクト
 * @return {int} スクロール停止位置の調整値
 */
function get_adjust_scroll_top(hash, arg) {
  if($(hash).hasClass('esc_adjust_scroll_top')){
    return 0;
  }else{
    return window.matchMedia( "(max-width: 768px)" ).matches?
      arg.header_fixed_height_pc : arg.header_fixed_height_sp;
  }
}
