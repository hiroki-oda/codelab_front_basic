$(function() {
  var pagetop = $("#pageTop"); //変数設定
  pagetop.hide(); //ボタンを非表示にする
  $(window).scroll(function(){
    //150pxスクロールしたらボタン表示
    if($(this).scrollTop() > 150) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function(){
    //0.5秒でトップにスクロール
    $("body, html").animate({ scrollTop: 0 },500);
    return false;
  });
});