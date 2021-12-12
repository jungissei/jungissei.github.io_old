/*----------------------------------------------------------------------------
 * ハンバーガーメニュー
 *----------------------------------------------------------------------------*/
class hamburger_menu{
  constructor() {
    this.btn = '#hamburger_menu_btn';//ボタン
    this.menu_anchor = '#hamburger_menu_canvas a[href]';//メニューアンカ
    this.canvas = '#hamburger_menu_canvas';//キャンバス
    this.off_canvas = '#hamburger_menu_off_canvas';//オフキャンバス
    this.open_class = 'is_opened';//開閉クラス

    let self = this;
    let flag = true;

    /**
     * ボタン押下時
     */
    $(this.btn).on('click', function(){
      if(flag == false) return;
      flag = false;
      setTimeout(function(){ flag = true; }, 500);

      self.toggle_body();
    });

    /**
     * キャンバス内リンク押下時
     */
    $(this.menu_anchor).on('click', function(){
      if($(this).attr('target')) return;

      if(flag == false) return;
      flag = false;
      setTimeout(function(){ flag = true; }, 500);

      self.toggle_body();
    });

    /**
     * オフキャンバス押下時
     */
    $(this.off_canvas).on('click', function(){
      if(flag == false) return;
      flag = false;
      setTimeout(function(){ flag = true; }, 500);

      self.toggle_body();
    });
  }

  /**
   * キャンバス・オフキャンバス：トグル
   */
  toggle_body(){
    $(this.btn).toggleClass(this.open_class);

    this.canvas_slide_toggle_from_right();

    this.scroll_control();
  }

  /**
   * ページ全体のスクロールコントロール
   */
  scroll_control(){
    if($(this.btn).hasClass(this.open_class)){
      //ページ全体のスクロール無効化
      $('body').css('overflow' , 'hidden');
      return;
    }

    //ページ全体のスクロール無効化解除
    $('body').css('overflow' , '');
  }

  /* キャンバス表示アニメーション ここから */
  /**
   * キャンバスフェードトグル
   */
  canvas_fade_toggle(){
    $(this.canvas + ',' + this.off_canvas).fadeToggle();
  }

  /**
   * キャンバススライドトグル(上から)
   */
  canvas_slide_toggle_from_top(){
    $(this.canvas).slideToggle();
    $(this.off_canvas).fadeToggle();
  }

  /**
   * キャンバススライドトグル(左から)
   */
  canvas_slide_toggle_from_left(){
    let speed = 300;

    if($(this.btn).hasClass(this.open_class)){
      $(this.canvas).css({
        'left': '-100%',
        'right': 'auto',
        'opacity': '0',
        'display': ''
      });

      $(this.canvas).animate({
        'opacity': '1',
        'left': '0'
      }, speed, 'linear');

      $(this.off_canvas).fadeIn();
    }else{
      let self = this;
      $(this.canvas).animate({
        'opacity': '0',
        'left': '-100%'
      }, speed, 'linear', function(){
        $(self.canvas).css({
          'left' : '',
          'right' : '',
          'opacity': '',
          'display' : 'none'
        });
      });

      $(this.off_canvas).fadeOut();
    }
  }

  /**
   * キャンバススライドトグル(右から)
   */
  canvas_slide_toggle_from_right(){
    let speed = 300;

    if($(this.btn).hasClass(this.open_class)){
      $(this.canvas).css({
        'right': '-100%',
        'left': 'auto',
        'opacity': '0',
        'display': ''
      });

      $(this.canvas).animate({
        'opacity': '1',
        'right': '0'
      }, speed, 'linear');

      $(this.off_canvas).fadeIn();
    }else{
      let self = this;
      $(this.canvas).animate({
        'opacity': '0',
        'right': '-100%'
      }, speed, 'linear', function(){
        $(self.canvas).css({
          'left' : '',
          'right' : '',
          'opacity': '',
          'display' : 'none'
        });
      });

      $(this.off_canvas).fadeOut();
    }
  }
  /* キャンバス表示アニメーション ここまで */

}

new hamburger_menu();
