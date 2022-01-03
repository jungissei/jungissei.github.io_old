/**
 * 画像一覧複製：demo1
 */
function append_css_slideshow_items1() {
  let items = $('#demo1 .css_slideshow_items').clone();
  for (let step = 1; step < 3; step++) {
    items.appendTo('#demo1');
  }
}
append_css_slideshow_items1();

/**
 * 画像一覧複製：demo2
 */
function append_css_slideshow_items2() {
  let items = $('#demo2 .css_slideshow_items').clone();
  for (let step = 1; step < 2; step++) {
    items.clone().appendTo('#demo2');
  }
}
append_css_slideshow_items2();

/**
 * 画像一覧複製：demo3
 */
function append_css_slideshow_items3() {
  let items = $('#demo3 .css_slideshow_items').clone();
  for (let step = 1; step < 2; step++) {
    items.clone().appendTo('#demo3');
  }
}
append_css_slideshow_items3();

/**
 * 画像一覧複製：demo4
 */
function append_css_slideshow_items4() {
  let items = $('#demo4 .css_slideshow_items').clone();
  for (let step = 1; step < 2; step++) {
    items.clone().appendTo('#demo4');
  }
}
append_css_slideshow_items4();
