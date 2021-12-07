/*----------------------------------------------------------------------------
 * スムーズスクロール
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){
  smooth_scroll(
    $( location ).attr('hash')
  );

  //appendさせたアンカーリンクを動かすため、onload内に設置
  $('a[href*="#"]').click(function(){
    smooth_scroll(
      $(this)[0].hash
    );
    return false;
  });
});

/**
 * スムーズスクロール
 * @param {string} ハッシュ値
 */
function smooth_scroll(hash){
  //動作条件
  if(is_available_for_smooth_scroll(hash)){
    $('html, body').animate(
      { scrollTop: $(hash).offset().top },
      500,
      'swing'
    );
  }
}

/**
 * @param {string} ハッシュ値
 * @return bool スムーズスクロール 動作条件
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
