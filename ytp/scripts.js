/**----------------------------------------------------------------------------
 * YouTube自動再生
 *----------------------------------------------------------------------------*/
$('#youtube_play').YTPlayer();



/**----------------------------------------------------------------------------
 * YouTubeポップアップ再生
 *----------------------------------------------------------------------------*/
$(window).on('load', function(){
  let flag = true;

  $('[data-youtube]').on('click', function(){

    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    $('body').css('overflow', 'hidden');
    $('body').append(
      get_html_popup(this)
    );

    control_popup_panel();
  });
});

/**
 * ポップアップHTMLを返す
 * @param {object} self クリック要素オブジェクト
 * @return {string} ポップアップHTML
 */
function get_html_popup(self){
  let video_url = $(self).data('youtube');

  return`
    <section id="popup_panel" style="display:none;">
      <div class="container">
        <div class="content_width">
          <div class="panel_mov">
            <div
              class="youtube_play"
              data-property="{
                videoURL: '${video_url}',
                containment: '.panel_mov',
                mute: false,
                loop: true,
                autoPlay: true,
                startAt: 0,
                showControls: true,
                showYTLogo: true
              }"
            ></div>
          </div>
        </div>
      </div>
      <button class="popup_close" type="button">×</button>
    </section>
  `;
}

/**
 * ポップアップパネル表示・非表示制御
 */
function control_popup_panel(){
  let panel = $('#popup_panel');
  let close = $('#popup_panel, #popup_panel .popup_close');
  let ytp = $('#popup_panel .youtube_play');

  panel.fadeIn(300, function(){
    ytp.YTPlayer();
  });

  let flag = true;
  close.on('click', function(e){

    if($(e.target).attr('class') === 'YTPOverlay') return;

    if(flag == false) return;
    flag = false;
    setTimeout(function(){ flag = true; }, 500);

    panel.fadeOut(300, function(){
      panel.remove();
    });
    $('body').css('overflow', '');
  });
}
