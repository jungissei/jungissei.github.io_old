/* グローバルメニュー ここから */

/*
* 表示ページURLの第一階層と一致するグローバルメニューのアイテムに「.current」付与
*/
$(function(){
  //現在のURLの第一階層文字列を取得
  const cur_slug = location.pathname.match('(?<=/).*?(?=/)')[0];

  //上記で取得した文字列に一致するグローバルメニューのアイテムに「.current」付与
  $('#global_menu_items > li[data-slug]').each(function(){
    let item_slug = $(this).attr('data-slug');
    if(cur_slug == item_slug){
      $(this).addClass('current');
    }
  });
});


/*
* サブメニュー・メガメニュー表示
*/
$(window).on('load', function(){
  //アイテムへのホバー時にサブメニュートグル
  $('.js_toggle_by_hover').hover(function(){
    $(this).children('.js_toggle_by_hover_content').slideDown(200).animate(
      { opacity: 1 },
      { queue: false, duration: 200 }
    );
  }, function(){
    $(this).children('.js_toggle_by_hover_content').fadeOut(100).animate(
      { opacity: 0 },
      { queue: false, duration: 100 }
    );
  });
});


/*
* スクロール追従
*/
$(function(){

  //グローバルメニューセレクター
  let global_menu_bg = $('#global_menu>.global_menu_bg');

  //親要素の高さ固定
  let height_num = global_menu_bg.outerHeight(true);
  $('#global_menu').height(height_num);

  //グローバルメニュー座標取得
  let position = $('#global_menu').offset().top + height_num;

  //固定動作
  $(window).on('scroll', function(){
    if(position < $(window).scrollTop()){

      if(global_menu_bg.hasClass('sticky')){
        return;
      }

      global_menu_bg.addClass('sticky');
      global_menu_bg.css('top', - height_num);
      global_menu_bg.animate(
        { top: 0 },
        { queue: false, duration: 300 }
      );
    }else{
      if(!global_menu_bg.hasClass('sticky')){
        return;
      }

      $('#global_menu>.global_menu_bg').removeClass('sticky');
    }
  });

  //スクロールイベント
  $(window).trigger('scroll');
});




/* グローバルメニュー ここまで */
