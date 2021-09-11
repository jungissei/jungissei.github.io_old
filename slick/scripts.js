/* スライドショー ここから */

//ページングアロー
$(function() {
  $('#slick01 .slick_items').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="prev_arrow"><span></span></div>',
    nextArrow: '<div class="next_arrow"><span></span></div>',
  });
});


//ページングドット
$(function() {
  $('#slick02 .slick_items').slick({
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});


//ページング画像
$(function() {
  $('#slick03 .slick_items').slick({
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
  if($('#slick03 .slick-dots li').length >= 1){
    $('#slick03 .slick-dots').append('<li></li><li></li><li></li>');
  }
});


//連動ページング画像、SP時ページング画像の枚数減らす
$(function() {
  let $carousel_main_wrp = $('#slick04 .slick_main'),
      $carousel_main = $carousel_main_wrp.children('.slick_items'),
      $carousel_thumb = $carousel_main_wrp.clone().removeClass('slick_main').addClass('slick_thumb').insertAfter($carousel_main_wrp).children('.slick_items');

  $carousel_main.slick({
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $carousel_thumb
  });
  $carousel_thumb.slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: $carousel_main,
    responsive: [{
      breakpoint: 768,　
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }]
  });
});


//アスペクト調整
$(function() {
  $('#slick05 .slick_items').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});
$(window).on('load', function(){
  //「/aspect_ratio/scripts.js」のメソッド
  add_class_aspect_ratio($('#slick05'));
});

/* スライドショー ここまで */
