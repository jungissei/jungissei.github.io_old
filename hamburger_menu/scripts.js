/*----------------------------------------------------------------------------
 * ハンバーガーメニュー
 *----------------------------------------------------------------------------*/

class hamburger_menu{
  constructor() {
    this.btn_selector = $('#hamburger_menu > .menu_btn');//ハンバーガーメニューボタンセレクタ
    this.anchor_selector = $('#hamburger_menu > .hamburger_menu_body a[href]');//ハンバーガーメニューアンカーセレクタ
    this.body_class = '.hamburger_menu_body';//ハンバーガーメニューbodyクラス
    this.open_class = 'is_opened';//開閉クラス
  }

  open_menu(){
    let self = this;
    let flag = true;
    this.btn_selector.on('click', function(){
      if(flag == false) return;
      flag = false;
      setTimeout(function(){ flag = true; }, 500);

      self.toggle_body();
    });

    this.anchor_selector.on('click', function(){
      if($(this).attr('target')) return;

      self.toggle_body();
    });
  }

  /**
   * ハンバーガーメニューボタン：トグル
   */
  toggle_body(){
    this.btn_selector.toggleClass(this.open_class);
    this.btn_selector.next(this.body_class).fadeToggle();

    this.scroll_control();
  }

  /**
   * ハンバーガーメニュー開閉時：スクロールコントール
   */
  scroll_control(){
    if(this.btn_selector.hasClass(this.open_class)){
      //ページ全体のスクロール無効化
      this.disable_body_scroll();
      return;
    }

    //ページ全体のスクロール無効化解除
    this.enable_body_scroll();
  }

  /**
   * ページ全体のスクロール無効化
   */
  disable_body_scroll() {
    $('body').css({
      'padding-right' : '15px',
      'position' : 'fixed',
      'top' : - $(window).scrollTop()
    });
  }

  /**
   * ページ全体のスクロール無効化解除
   */
  enable_body_scroll() {
    let scroll_y = document.body.style.top;

    $('body').css({
      'padding-right' : '',
      'position' : '',
      'top' : ''
    });

    window.scrollTo(0, parseInt(scroll_y || '0') * -1);
  }
}

let hamburger_menu_class = new hamburger_menu();
hamburger_menu_class.open_menu();
