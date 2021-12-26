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
            title : "ボタンリンク",
            path : "/btn"
          },
        ]
      },
      {
        title : "グローバルメニュー",
        path : "/global_menu"
      },
      {
        title : "ハンバーガーメニュー",
        path : "/hamburger_menu"
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
        title : "スライドショー",
        path : "/slick"
      },
      {
        title : "スムーススクロール",
        path : "/smooth_scroll"
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
        title : "ページトップへ戻る",
        path : "/page_top"
      },
      {
        title : "YouTube",
        path : "/ytp"
      }
      // submenu
      // {
      //   title : "サブメニューあり",
      //   sub : [
      //     {
      //       title : "トグル",
      //       path : "js/tabumenu"
      //     },
      //     {
      //       title : "ボタン",
      //       path : "js/tabumenu"
      //     }
      //   ]
      // },
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
