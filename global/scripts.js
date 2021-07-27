/*--------------------------------------
window.onload
---------------------------------------*/
window.onload = function(){

  add_breadcrumbs();
};


/*--------------------------------------
add breadcrumbs
---------------------------------------*/
function add_breadcrumbs(){
  const elem_html = `<div><a href="/">HOME</a> > </div>`;
  document.getElementById("header").insertAdjacentHTML("afterbegin", elem_html);
}

/*--------------------------------------
add sidebar menu
---------------------------------------*/
function add_sidebar_menu(){
  const menu_arr = [
    {
      title : "タブメニュー",
      path : "js/tabumenu"
    }
  ]

  document.getElementById("aside").insertAdjacentHTML("afterbegin", elem_html);
}
