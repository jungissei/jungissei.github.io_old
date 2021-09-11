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
