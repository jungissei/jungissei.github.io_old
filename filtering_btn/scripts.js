/**----------------------------------------------------------------------------
 * フィルタリングボタン
 *----------------------------------------------------------------------------*/

/**--------------------------------------
 * フィルタリングボタン追加
 *--------------------------------------*/
$(function(){
  add_html_filtering_btn();
});

/**
 * フィルタリングボタンHTML要素を追加
 * @param {object} btn_items フィルタリングボタンを囲う要素のセレクタオブジェクト
 * @param {object} unique_arr ユニークなIDの配列オブジェクト
 */
function add_html_filtering_btn(){
  //ユニークなIDの配列オブジェクトを取得
  let unique_arr = get_unique_id(
    $('#area_filtering .post_item')
  );

  //ソート
  unique_arr = sort_unique_arr(unique_arr);

  let html = '';

  html += '<button value="-1">すべて</button>';
  $.each(unique_arr, function(){
    html += '<button value="' + this.id + '">' + this.name + '</button>';
  });

  $('#area_filtering .btn_items').append(html);
}


/**
 * ユニークなIDの配列オブジェクトを取得
 * @param {object} post_items 各アイテムのセレクタオブジェクト
 * @return {object} ユニークなIDの配列オブジェクト
 */
function get_unique_id(post_items){
  let labels = [];

  post_items.each(function(){
    let self = $(this);
    let index = labels.findIndex(function(label){
      return label.id === self.data('label-id');
    });

    if(index >= 0) return;

    labels.push({
      'id' : $(this).data('label-id'),
      'name' : $(this).find('.post_label').text()
    });
  });

  return labels;
}

/**
 * ユニークなIDの配列オブジェクトをソート
 * @param {object} unique_arr ユニークなIDの配列オブジェクト
 * @return {object} ソートされたユニークなIDの配列オブジェクト
 */
function sort_unique_arr(unique_arr){
  return unique_arr.sort(function(a, b){
    if( a.id < b.id ) return -1;
    if( a.id > b.id ) return 1;
    return 0;
  });
}



/**--------------------------------------
 * フィルタリング機能
 *--------------------------------------*/
$(window).on('load', function(){
  let btn_active = 'is_active';

  //ボタン初期化
  $('#area_filtering .btn_items button[value="-1"]')
    .addClass(btn_active);

  $('#area_filtering .btn_items button').on('click', function(){
    let next_id = parseInt($(this).val());

    //アクティブボタンクリック時は何もしない
    if(is_active_btn_clicked(next_id, btn_active)) return;

    //ボタン初期化
    $('#area_filtering .btn_items button')
      .removeClass(btn_active);

    //フィルタリング動作
    add_class_btn_filter_post(
      btn_active,
      $(this),
      next_id
    );

  });
});

/**
 * アクティブボタンをクリックしたか
 * @param {int} next_id クリックボタンのID
 * @param {string} btn_active アクティブボタンのクラス名
 * @return {bool} アクティブボタンをクリックしたらtrue
 */
function is_active_btn_clicked(next_id, btn_active){
  let curr_id = parseInt(
    $('#area_filtering .btn_items button[class="'+btn_active+'"]')
    .val());

  return curr_id === next_id;
}

/**
 * フィルタリング動作
 * @param {string} btn_active アクティブボタンのクラス名
 * @param {object} self クリックイベントオブジェクト
 * @param {int} next_id クリックしたボタンのID
 */
function add_class_btn_filter_post(btn_active, self, next_id){
  //ボタン初期化
  $('#area_filtering .btn_items button')
    .removeClass(btn_active);

  //アクティブボタン切替
  self.addClass(btn_active);

  $('#area_filtering .post_item').each(function(){
    $(this).hide();

    //-1の時はすべて表示
    if(next_id === -1){
      $(this).fadeIn(300);
      return;
    }

    //クリックしたボタンのIDに応じて表示
    if(next_id === parseInt($(this).data('label-id'))){
      $(this).fadeIn(300);
    }

  });
}
