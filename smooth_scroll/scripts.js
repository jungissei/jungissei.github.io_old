/* スムーズスクロール ここから */

/*
* 共通スムーズスクロールメソッド
* @param string ハッシュ値
*/
function common_smooth_scroll(hash){
  let target = jQuery(hash == '#' || hash == '' ? 'html' : hash);
  if(jQuery(target).length == 0){
    return false;
  }

  let position = jQuery(target).offset().top;
  jQuery('html, body').animate({ scrollTop: position }, 500, 'swing');
}

//ページを読込後
jQuery(window).on('load', function(){
  let hash = jQuery( location ).attr('hash');
  common_smooth_scroll(hash);
});

//クリック後
jQuery('a[href*="#"]').click(function(){
  let hash = jQuery(this)[0].hash;
  common_smooth_scroll(hash);
  return false;
});

/* スムーズスクロール ここまで */
