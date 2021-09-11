/* 画像アスペクト調整 ここから */
function add_class_aspect_ratio(selector){
  selector.find('img').each(function(){
    let img_width = $(this).width();
    let img_height = $(this).height();
    aspect_ratio = img_width / img_height;

    if(aspect_ratio >= 1){
      //横長画像の場合
      $(this).addClass('img_hor');
    }else{
      //縦長画像の場合
      $(this).addClass('img_ver');
    }
  });
}
/* 画像アスペクト調整 ここまで */
