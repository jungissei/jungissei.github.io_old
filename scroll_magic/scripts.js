/**
 * 一番最初のセクションはページ読み込み後に動作し、
 * 上記以外はディスプレイの上から高さ90%の位置で動作
 */
$(window).on('load', function(){
  let controller = new ScrollMagic.Controller();
  let first_section = '.animate_first_section';//一番最初のセクション
  let other_section = '.animate_section';//上記以外のセクション


  //一番最初のセクションはページ読み込み後に動作
  new ScrollMagic.Scene({
    triggerElement: first_section,
    reverse: false,
    triggerHook: 1
  }).on('enter', function() {

    add_animation_class(first_section);

  }).addTo(controller);


  //上記以外はディスプレイの上から高さ90%の位置で動作
  $(other_section).each(function(i, section_elem){
    new ScrollMagic.Scene({
      triggerElement: section_elem,
      reverse: false,
      triggerHook: 0.9
    }).on('enter', function() {

      add_animation_class(section_elem);

    }).addTo(controller);

  });

});


/**
 * セクションの要素とその中のアニメーション要素にクラス名を追加
 * @param {string} section_elem セクションの要素
 */
function add_animation_class(section_elem){
  let class_name = 'is_animated';

  $(section_elem).addClass(class_name);
  $(section_elem).find('.animate_item').addClass(class_name);
}
