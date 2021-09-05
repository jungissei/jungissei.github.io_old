/* ハンバーガーメニュー ここから */
$("#hamburger_menu > .hamburger_menu_btn").on('click', function(){
  toggle_hamburger_menu();
});

$("#hamburger_menu > .hamburger_menu_body a[href]").on('click', function(){
  if($(this).attr('target')){
    return;
  }

  toggle_hamburger_menu();
});

/*
* ハンバーガーメニュートグルさせる
*/
function toggle_hamburger_menu(){
  let btn = $("#hamburger_menu > .hamburger_menu_btn");
  btn.toggleClass('opened');
  btn.next('.hamburger_menu_body').fadeToggle();

  let prevent_scroll = (btn.hasClass('opened'))? true: false;
  scroll_control(prevent_scroll);
}

/*
* ハンバーガーメニュー開閉時のスクロールコントール
*/
function scroll_control(prevent_scroll){
  // add/removeEventListenerでアロー関数として定義するとイベントが削除されない
  let scrollControll = function(event) {
    if ($(event.target).closest('.hamburger_menu_body').length > 0) {
      event.stopPropagation();
    } else {
      event.preventDefault();
    }
  };

  if(prevent_scroll){
    //ページ全体のスクロール無効化
    $('html').css({ overflow: 'hidden' });
    document.addEventListener(
      'touchmove',
      scrollControll,
      { passive: false }
    );
  }else{
    //ページ全体のスクロール無効化解除
    $('html').css({ overflow: '' });
    document.removeEventListener(
      'touchmove',
      scrollControll,
      { passive: false }
    );
  }
}

/* ハンバーガーメニュー ここまで */
