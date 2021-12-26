//画像関連処理
$(window).on('load resize', function(){
  //画面幅に応じて画像切替
  change_img_by_display_width();
});




/* 画面幅に応じて画像切替 ここから */
/*
* data-sp-src属性をもつ全画像にsrc属性の値をdata-pc-src属性につける
*/
$(window).on('load', function () {
  $('img[data-sp-src]').each(function () {
    $(this).attr('data-pc-src', $(this).attr('src'));
  });
});

/*
* PC・SP画像切替
*/
function change_img_by_display_width(){
  $('img[data-sp-src]').each(function () {
    let data_src = window.matchMedia( "(max-width: 768px)" ).matches?
      $(this).attr('data-sp-src') : $(this).attr('data-pc-src');

    $(this).attr('src', data_src);
  });
}
/* 画面幅に応じて画像切替 ここまで */





/**------------------------------------------------------
 * 画像アスペクト調整
 *------------------------------------------------------*/
$('.img_liquid_fill').imgLiquid();

$(window).on('resize', function(){
  $('.img_liquid_fill').imgLiquid();
});
