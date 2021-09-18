/* スムーズスクロール ここから */

/*
* スムーズスクロール
* @param string ハッシュ値
*/
function smooth_scroll(hash){
  //動作条件
  if(is_available_for_smooth_scroll(hash)){
    jQuery('html, body').animate(
      { scrollTop: jQuery(hash).offset().top },
      500,
      'swing'
    );
  }
}

/*
* スムーズスクロール 動作条件
* @param string ハッシュ値
* @return bool available or not
*/
function is_available_for_smooth_scroll(hash){
  //ハッシュ値が空の時
  if(hash == '#' || hash == '')
    return false;

  //ターゲット要素が存在しない時
  if(jQuery(hash).length == 0)
    return false;

  return true;
}

//ページを読込後
jQuery(window).on('load', function(){
  smooth_scroll(
    jQuery( location ).attr('hash')
  );
});

//クリック後
jQuery('a[href*="#"]').click(function(){
  smooth_scroll(
    jQuery(this)[0].hash
  );
  return false;
});

/* スムーズスクロール ここまで */
