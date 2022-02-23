/**------------------------------------------------------
 * #TOC
 *
 * バリデーション
 *------------------------------------------------------*/

/**------------------------------------------------------
 * バリデーション
 *------------------------------------------------------*/
$(window).on('load', function(){
  $('#area_form').validate({
    rules: {
      your_name : {
        required: true
      },
      your_mail: {
        required: true,
        email: true
      }
    },
    messages: {
      your_name : {
        required: '必須項目です。入力してください。',
      },
      your_mail: {
        required: '必須項目です。入力してください。',
        email: '有効なEメールアドレスを入力してください。'
      }
    },
    errorPlacement: function(error, element){
      $(element).after(error);
    },
    success: function(error, element) {
      $(error).remove();
    },
    onfocusout: false
  });
});
