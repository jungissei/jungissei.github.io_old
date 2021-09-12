//画像関連処理
$(window).on('load resize', function(){
  //画面幅に応じて画像切替
  change_img_by_display_width();

  //画像アスペクト調整
  add_class_aspect_ratio($('.js_aspect_ratio'));
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




/* 画像アスペクト調整 ここから */
/*
* 画像アスペクト調整
* 「$(window).on('load')」などページ読込後に動かさないと、正しく動作しないことがある。
*/
function add_class_aspect_ratio(selector){
  selector.find('img').each(function(){
    //初期化
    if(
      $(this).hasClass('img_ver')
      ||$(this).hasClass('img_hor')
    ){
      $(this).removeClass('img_ver img_hor');
    }

    //クラス追加
    let img_width = $(this).width(),
        img_height = $(this).height(),
        aspect_ratio = img_width / img_height;
        adding_class = aspect_ratio >= 1?
          'img_hor':'img_ver';

    $(this).addClass(adding_class);
  });
}
/* 画像アスペクト調整 ここまで */
