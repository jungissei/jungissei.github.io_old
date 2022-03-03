/**
 * NEW 付与 365日前
 */
$(function(){
  $('.add_new li').each(function(){
    let post_date = new Date($(this).data('post_date'));

    if(is_within_period(post_date, 365)){
      $(this).append('<span class="new">NEW</span>');
    }
  });
});

/**
 * 指定日付が現在よりも指定期間内かどうかを判定
 * @param {string} date 日付 書式(Y-m-d) ex)2020-01-01
 * @param {int} period_days 指定日付数
 * @return {bool} 指定期間内ならtrue
 */
function is_within_period(date, period_days){

  let cur_date = new Date();
  let target_date = new Date(date);
  let past_date = new Date(
    target_date.getFullYear(),
    target_date.getMonth(),
    target_date.getDate() + period_days
  );

  return cur_date < past_date;
}
