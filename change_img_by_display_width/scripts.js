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
$(window).on('load resize', function () {
  $('img[data-sp-src]').each(function () {
    let data_src = window.matchMedia( "(max-width: 768px)" ).matches?
      $(this).attr('data-sp-src') : $(this).attr('data-pc-src');

    $(this).attr('src', data_src);
  });
});

/* 画面幅に応じて画像切替 ここまで */
