/**------------------------------------------------------
 * # Slick TOC
 * ## 各スライドショー
 * - ページングアロー・ページングドット
 * - ページング画像
 * - 連動ページング画像
 * - 3つ画像を出し、左右の画像を小さく
 *------------------------------------------------------*/

/**------------------------------------------------------
 * ページングアロー・ページングドット
 *------------------------------------------------------*/
$('#slick01 .slick_items').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev_arrow"><span></span></div>',
  nextArrow: '<div class="next_arrow"><span></span></div>',
  dots: true
});


/**------------------------------------------------------
 * ページング画像
 *------------------------------------------------------*/
$('#slick02 .slick_items').slick({
  fade: true,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  customPaging: function(slider, i) {
    let thumb_src = $(slider.$slides[i]).find('img').attr('src');
    return '<img src="' + thumb_src + '">';
  }
});

//ページング画像:余白調整
if($('#slick02 .slick-dots li').length >= 1){
  $('#slick02 .slick-dots').append('<li></li><li></li><li></li>');
}


/**------------------------------------------------------
 * 連動ページング画像、SP時ページング画像の枚数減らす
 *------------------------------------------------------*/
let slick_items = $('#slick03 .slick_items');
slick_thumb = slick_items.clone().insertAfter(slick_items);

slick_items.addClass('slick_main');
slick_items.slick({
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: slick_thumb
});

slick_thumb.addClass('slick_thumb');
slick_thumb.slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: slick_items,
  responsive: [{
    breakpoint: 768,　
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  }]
});



/**------------------------------------------------------
 * 3つ画像を出し、左右の画像を小さく
 *------------------------------------------------------*/
$('#slick04 .slick_items').slick({
  autoplay: false,
  autoplaySpeed: 3000,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '30%',
  arrows: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      centerPadding: '10%'
    }
  }]
});
