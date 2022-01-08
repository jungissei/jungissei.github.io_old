/*--------------------------------------
window.onload
---------------------------------------*/
window.onload = function(){
  add_menu_to_aside();
};


/*--------------------------------------
add sidebar menu
---------------------------------------*/
function add_menu_to_aside(){
  const elem_html = get_html_aside_menu(
    [
      {
        title : "基本",
        sub : [
          {
            title : "グローバルメニュー",
            path : "/global_menu"
          },
          {
            title : "ハンバーガーメニュー",
            path : "/hamburger_menu"
          },
          {
            title : "ページトップへ戻る",
            path : "/page_top"
          },
          {
            title : "スムーススクロール",
            path : "/smooth_scroll"
          },
          {
            title : "ボタンリンク",
            path : "/btn"
          }
        ]
      },
      {
        title : "メニュー関連",
        sub : [
          {
            title : "配列からメニュー追加",
            path : "/add_menu_from_arr"
          },
          {
            title : "タブメニュー",
            path : "/tab_menu"
          },
          {
            title : "ホバーメニュー",
            path : "/hover_menu"
          },
          {
            title : "アコーディオンメニュー",
            path : "/accordion_menu"
          }
        ]
      },
      {
        title : "YouTube関連",
        sub : [
          {
            title : "jQuery.mb.YTPlayer",
            path : "/ytp"
          },
          {
            title : "lity.js",
            path : "/lity"
          }
        ]
      },
      {
        title : "アニメーション関連",
        sub : [
          {
            title : "スクロールマジック",
            path : "/scroll_magic"
          },
          {
            title : "CSSスライドショー",
            path : "/css_slideshow"
          }
        ]
      },
      {
        title : "スライドショー",
        path : "/slick"
      },
      {
        title : "画像アスペクト調整",
        path : "/aspect_ratio"
      },
      {
        title : "目次生成",
        path : "/toc"
      },
      {
        title : "フォーム",
        path : "/form"
      }
    ]
  );

  document.getElementById("js_sumally").insertAdjacentHTML("afterbegin", elem_html);
}

function get_html_aside_menu(arr_menu){
  let elem_html = ``;
  let temp_html;

  arr_menu.forEach(function(val){
    temp_html = ``;
    temp_html += get_html_aside_menu_item(val);

    if(val.sub)
      temp_html += get_html_aside_menu_sub(val.sub);

    elem_html += `<li>${temp_html}</li>`;
  });

  return `<ul class="side_menu">${elem_html}</ul>`;
}

function get_html_aside_menu_sub(menu_items){
  let elem_html = ``;
  let temp_html;

  menu_items.forEach(function(val){
    temp_html = ``;
    temp_html += get_html_aside_menu_item(val);
    elem_html += `<li>${temp_html}</li>`;
  });
  return `<ul>${elem_html}</ul>`;
}

function get_html_aside_menu_item(menu_item){
  if(menu_item.path){
    return `
      <a href="${menu_item.path}">
        ${menu_item.title}</a>
    `;
  }

  return `<span>${menu_item.title}</span>`;
}
