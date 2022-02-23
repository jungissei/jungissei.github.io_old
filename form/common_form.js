/**------------------------------------------------------
 * #TOC
 *
 * ## ファイルアップロード
 * ## セレクトボックス 値が空の時 文字色をplaceholderと同色にする
 * ## 住所検索ボタンの動作
 * ## カレンダー
 * ## チェック時にsubmitボタン有効化
 * ## バリデーション
 *------------------------------------------------------*/

/**------------------------------------------------------
 * ファイルアップロード
 *------------------------------------------------------*/
$(function(){
  let form_file_name_default = '選択されていません';

  $('.form_file .form_file_name').text(form_file_name_default);

  $('.form_file input[type="file"]').on('change', function(){

    let form_file_name = $(this).val()?
      $(this).val() : form_file_name_default;

    $(this).nextAll('.form_file_name').text(form_file_name);

  });
});



/**------------------------------------------------------
 * セレクトボックス 値が空の時 文字色をplaceholderと同色にする
 *------------------------------------------------------*/
$(function(){
  let select = $('.form_wrp .form_select select');

  control_select_txt_color(select);

  select.on('change', function(){
    control_select_txt_color($(this));
  });
});

/**
 * 値が空の時 文字色をplaceholderと同色にする
 * @param {object} select セレクタ
 */
function control_select_txt_color(select) {
  if(select.val() == ''){
    select.css('color', '#757575');
    return;
  }

  select.css('color', '');
}


/**------------------------------------------------------
 * 住所検索ボタンの動作
 *------------------------------------------------------*/
(function() {
  //該当フォーム
  let hadr = document.querySelector(".h-adr"),
      cancelFlag = true;

  //イベントをキャンセルするリスナ
  let onKeyupCanceller = function(e) {
    if(cancelFlag){
      e.stopImmediatePropagation();
    }
    return false;
  };

  // 郵便番号の入力欄
  let postalcode = hadr.querySelectorAll(".p-postal-code"),
      postalField = postalcode[postalcode.length - 1];

  //通常の挙動をキャンセルできるようにイベントを追加
  postalField.addEventListener("keyup", onKeyupCanceller, false);

  //ボタンクリック時
  let btn = hadr.querySelector(".postal-search");
  btn.addEventListener("click", function(e) {
    //キャンセルを解除
    cancelFlag = false;

    //発火
    let event;
    if (typeof Event === "function") {
        event = new Event("keyup");
    } else {
        event = document.createEvent("Event");
        event.initEvent("keyup", true, true);
    }
    postalField.dispatchEvent(event);

    //キャンセルを戻す
    cancelFlag = true;
  });
})();



/**------------------------------------------------------
 * カレンダー
 *
 * flatpicker pluginを使用。
 * カレンダーを機能を付与したいinput要素に.form_calendarのクラス名付与。
 *------------------------------------------------------*/
$('.form_calendar').flatpickr({
  dateFormat: 'Y/m/d',
  'locale': 'ja'
});


/**------------------------------------------------------
 * チェック時にsubmitボタン有効化
 *------------------------------------------------------*/
$('.privacy_check').on('change', function(){
  if($(this).prop('checked')){
    $('#comfirm_btn').attr('disabled', false)
    return;
  }

  $('#comfirm_btn').attr('disabled', true)
  return;
});
