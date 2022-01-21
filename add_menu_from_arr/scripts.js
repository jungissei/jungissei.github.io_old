/**------------------------------------------------------
 * メニュー追加関連
 * ## 指定セレクタにメニューHTMLを追加
 * ## メニュー配列
 * ## メニュー追加ロジック
 *------------------------------------------------------*/
/**---------------------------
 * 指定セレクタにメニューHTMLを追加
 *---------------------------*/
/**
 * 指定セレクタにメニューHTMLを追加
 * @param {string} menu メニュー配列
 * @param {string} selector セレクタ
 * @param {bool} sub サブメニュー真偽
 * @param {object} menu_rule フィルター・ソート(空の場合は何もしない)
 */
add_html_menu([
  {
    'menu' : get_menu_from_arr1(),
    'selector' : '#menu_all',
    'sub' : true,
    'menu_rule' : []
  },
  {
    'menu' : get_menu_from_arr1(),
    'selector' : '#menu_parents',
    'sub' : false,
    'menu_rule' : []
  },
  {
    'menu' : get_menu_from_arr1(),
    'selector' : '#menu_filter_sort',
    'sub' : false,
    'menu_rule' : [
      'external_site',
      'shop_list',
      'about',
      'cat',
      'top',
      'shop'
    ]
  }
]);

/**
 * 指定セレクタにサブメニューHTMLを追加
 * @param {string} menu メニュー配列
 * @param {string} selector セレクタ
 * @param {string} handle 抽出するハンドル名
 */
add_html_menu_sub([
  {
    'menu' : get_menu_from_arr1(),
    'selector' : '#menu_cat',
    'handle' : 'cat',
    'sort' : []
  },
  {
    'menu' : get_menu_from_arr1(),
    'selector' : '#sub_menu_filter_sort',
    'handle' : 'shop_list'
  }
]);

/**---------------------------
 * メニュー配列
 *---------------------------*/
/**
 * メニュー配列1を返す
 * @param {string} handle ハンドル名:(※サブメニューにハンドル名は必要なし)
 * @param {string} ttl リンク文字列
 * @param {string} url リンクURL ※無い場合キーを追加しない
 * @param {bool} target_blank target="_blank"真偽 ※urlキーが無い場合キーを追加しない
 * @param {object} sub_menu サブメニュー配列 ※無い場合キーを追加しない
 * @return {object} メニュー配列
 */
function get_menu_from_arr1() {
  return [
    {
      'handle' : 'top',
      'ttl' : 'TOPページ',
      'url' : 'https://example.com/',
      'target_blank' : false
    },
    {
      'handle' : 'about',
      'ttl' : '当店について',
      'url' : 'https://example.com/about',
      'target_blank' : false
    },
    {
      'handle' : 'cat',
      'ttl' : '商品カテゴリ',
      'url' : 'https://example.com/prod/cat',
      'target_blank' : false,
      'sub_menu' : [
        {
          'ttl' : 'チーズケーキ',
          'url' : 'https://example.com/prod/cat/1',
          'target_blank' : false
        },
        {
          'ttl' : 'チョコレートケーキ',
          'url' : 'https://example.com/prod/cat/2',
          'target_blank' : false
        },
        {
          'ttl' : 'モンブランケーキ',
          'url' : 'https://example.com/prod/cat/3',
          'target_blank' : false
        },
        {
          'ttl' : 'シフォンケーキ',
          'url' : 'https://example.com/prod/cat/4',
          'target_blank' : false
        },
        {
          'ttl' : '抹茶ケーキ',
          'url' : 'https://example.com/prod/cat/5',
          'target_blank' : false
        }
      ]
    },
    {
      'handle' : 'shop_list',
      'ttl' : '店舗一覧',
      'sub_menu' : [
        {
          'ttl' : 'ニューヨーク',
          'url' : 'https://example.com/shop_list/#1',
          'target_blank' : false
        },
        {
          'ttl' : 'ソウル',
          'url' : 'https://example.com/shop_list/#2',
          'target_blank' : false
        },
        {
          'ttl' : '北京',
          'url' : 'https://example.com/shop_list/#3',
          'target_blank' : false
        },
      ]
    },
    {
      'handle' : 'shop',
      'ttl' : '店舗概要',
      'url' : 'https://example.com/shop',
      'target_blank' : false
    },
    {
      'handle' : 'external_site',
      'ttl' : 'グループ企業(外部リンク)',
      'url' : 'https://example.com/group',
      'target_blank' : true
    }
  ];
}

/**---------------------------
 * メニュー追加ロジック
 *---------------------------*/
/**
 * 指定セレクタにメニューHTMLを追加
 * @param {object} arg HTML追加情報
 */
function add_html_menu(arg) {
  $.each(arg, function(){

    let menu = this.menu;
    if(this.menu_rule.length >= 1){
      menu = filter_sort_menu(
        this.menu,
        this.menu_rule
      );
    }

    $(this.selector).append(
      get_html_menu(menu, this.sub)
    );
  });
}

/**
 * 指定セレクタにサブメニューHTMLを追加
 * @param {object} arg HTML追加情報
 */
function add_html_menu_sub(arg){

  $.each(arg, function(){
    let self = this;

    //サブメニューをハンドル名でフィルタリング抽出
    let filtered_arr = this.menu.filter( function (arr) {
      return arr.handle == self.handle;
    })

    $(this.selector).append(
      get_html_sub_menu(filtered_arr[0].sub_menu)
    );
  });
}

/**
 * メニュー追加
 * @param {object} menu メニュー配列
 * @param {bool} sub サブメニュー真偽
 */
function get_html_menu(menu, sub = true) {
  let html = '';

  html += '<ul class="main_menu">';
  $.each(menu, function(){

    if(!is_allow_list_substitution(this, sub)){
      return;
    }

    html += '<li>' + get_html_list_inner(this);

    if(sub && typeof this.sub_menu){
      html += get_html_sub_menu(this.sub_menu);
    }

    html += '</li>';
  });
  html += '</ul>';

  return html;
}

/**
 * リストアイテムHTML代入許可
 * @condition URLなし・サブメニュー偽
 * @condition URLなし・サブメニュー真・サブメニュー無し
 * @param {object} list リストオブジェクト
 * @param {bool} sub サブメニュー真偽
 * @return {bool} HTML代入許可
 */
function is_allow_list_substitution(list, sub){
  if(
    typeof list.url === "undefined" && sub === false
    || typeof list.url === "undefined" &&  sub === true && typeof list.sub_menu === "undefined"
  ){
    return false;
  }

  return true;
}

/**
 * サブメニューリストHTML取得
 * @param {object} sub_menu サブメニューリストオブジェクト
 * @returns サブメニューリストHTML
 */
function get_html_sub_menu(sub_menu) {
  let html = '';

  html += '<ul class="sub_menu">';
  $.each(sub_menu, function(){

    html += '<li>' + get_html_list_inner(this) + '</li>';

  });
  html += '</ul>';

  return html;
}

/**
 * メニューリストHTML取得
 * @param {object} list メニューリストオブジェクト
 * @returns {string} メニューリストHTML
 */
function get_html_list_inner(list) {
  if(typeof list.url === "undefined"){
    return '<span class="menu_inner">' + list.ttl + '</span>';
  }

  let target_blank = list.target_blank?
    ' target="_blank"' : '';

  return '<a href="' + list.url + '"' + target_blank + ' class="menu_inner">' + list.ttl + '</a>';
}

/**
 * フィルター・ソートされたメニュー配列を返す
 * @param {object} menu_items メニュー配列
 * @param {object} menu_rule フィルター・ソートルール
 * @return {object} フィルター・ソートされたメニュー配列
 */
function filter_sort_menu(menu_items, menu_rule){

  menu_items = menu_items.filter(function(menu_item){
    if(menu_rule.indexOf(menu_item.handle) !== -1){
      return true;
    }

    return false;
  });

  menu_items.sort(function(a, b){
    let a_key, b_key;

    for (let i = 0; i < menu_rule.length; i++) {
      if (menu_rule[i] === a.handle) {
        a_key = i;
      }

      if (menu_rule[i] === b.handle) {
        b_key = i;
      }
    }

    if(a_key < b_key) return -1;
    if(a_key > b_key) return 1;
    return 0;
  });

  return menu_items;
}
