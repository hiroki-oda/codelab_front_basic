'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 8;

  //タブレットの価格をHTMLより取得
  var tabletPrice = document.getElementById('tabletPrice').innerHTML;
  //PCの価格をHTMLより取得
  var pcPrice = document.getElementById('pcPrice').innerHTML;

  btn.onclick = function() {
    var t_total = tablet.value * Number(tabletPrice); //タブレットの小計（文字列を数値に変換しつつ計算）
    var p_total = pc.value * Number(pcPrice); //パソコンの小計（文字列を数値に変換しつつ計算）
    var subvalue = t_total + p_total; //小計
    var TAXamount = (subvalue * TAXRATE) / 100; //税額
    subtotal.textContent = subvalue;  //小計の表示
    tax.textContent = TAXamount; //税額の表示
    total.textContent = subvalue + TAXamount; //合計の表示
  }
}());