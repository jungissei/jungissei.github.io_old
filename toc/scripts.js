/* 目次生成 ここから */
$(function() {

  //目次HTML取得
  let html = get_toc_body('#js_toc_content');
  if(html){
    //目次HTML追加
    $('#js_toc').html('<div class="toc_body">' + html + '</div>');
    $('#js_toc2').html('<div class="toc_body">' + html + '</div>');
  }
});

/*
* 目次HTML取得
* @return string 目次HTML
* @param wrp_id_name string 本文を囲うタグのID名
*/
function get_toc_body(wrp_id_name){
  let count_id = 1;
  let html = '';
  let cur_lvl = 0;

  $(
    wrp_id_name + ' h2, '
    + wrp_id_name + ' h3, '
    + wrp_id_name + ' h4, '
    + wrp_id_name + ' h5, '
    + wrp_id_name + ' h6'
  )
  .each(function(i){
    this.id = 'ttl_' + count_id;
    count_id ++;

    let lvl = get_lvl_ttl(this);//タイトルレベル取得

    while(cur_lvl < lvl) {
      html += '<ul class="toc_chapter">';
      cur_lvl ++;
    }

    while(cur_lvl > lvl) {
      html += '</ul>';
      cur_lvl --;
    }

    html += '<li><a href="#' + this.id + '">' + $(this).html() + '</a></li>';
  });


  while(cur_lvl > 0) {
    html += '</ul>';
    cur_lvl --;
  }

  return html;
}

/*
* タイトルレベル取得
* @return int タイトルレベル
*/
function get_lvl_ttl(selector){
  let ttl_tag = selector.nodeName.toLowerCase();

  if(ttl_tag == 'h2') {
    return 1;
  }else if(ttl_tag == 'h3'){
    return 2;
  }else if(ttl_tag == 'h4'){
    return 3;
  }else if(ttl_tag == 'h5'){
    return 4;
  }else if(ttl_tag == 'h6'){
    return 5;
  }

  return 0;
}

/* 目次生成 ここまで */
