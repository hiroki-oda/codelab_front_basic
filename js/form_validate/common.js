document.getElementById("submit").onclick = function() {
  var name = document.getElementsByName("name")[0].value;
  var kana = document.getElementsByName("kana")[0].value;
  var tel = document.getElementsByName("tel")[0].value;
  var mail = document.getElementsByName("mail")[0].value;
  var regex_kana = new RegExp(/^[ァ-ンヴー]*$/);
  var regex_tel = new RegExp(/^\d{7,13}$/);
  var regex_mail = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
  var flag = 0; //フラグに0を代入（0にリセット）

  //警告文を空白にする
  document.getElementById("err-name").textContent= "";
  document.getElementById("err-kana").textContent= "";
  document.getElementById("err-tel").textContent= "";
  document.getElementById("err-mail").textContent= "";

  //名前未入力チェック
  if (name == "") {
    //要件に一致する場合
    document.getElementById("err-name").textContent= "名前が未入力です。"; //警告文を表示
    document.getElementById("err-name").style.color = "red"; //警告文を赤にする
    flag = flag + 1 //エラーの場合フラグに1を加算
  }

  //フリガナ未入力チェック
  if (kana == "") {
    document.getElementById("err-kana").textContent = "全角カナで入力してください。";
    document.getElementById("err-kana").style.color = "red";
    flag = flag + 1;
  }

  //全角カタカナで入力されているかチェック
  if (regex_kana.test(kana)) {}
  else {
    document.getElementById("err-kana").textContent = "全角カナで入力してください。";
    document.getElementById("err-kana").style.color = "red";
    flag = flag + 1;
  }

  //電話番号未入力チェック
  if (tel == "") {
    document.getElementById("err-tel").textContent = "電話番号をハイフンなしで入力してください。";
    document.getElementById("err-tel").style.color = "red";
    flag = flag + 1;
  }

  //ハイフンなしの半角かチェック
  if (regex_tel.test(tel)) {}
  else {
    //要件に一致しない場合
    document.getElementById("err-tel").textContent = "電話番号をハイフンなしで入力してください。";
    document.getElementById("err-tel").style.color = "red";
    flag = flag + 1;
  }

  //アドレス未入力チェック
  if (mail == "") {
    document.getElementById("err-mail").textContent = "メールアドレスの形式ではありません。";
    document.getElementById("err-mail").style.color = "red";
    flag = flag + 1;
  }

  //アドレス形式かチェック
  if (regex_mail.test(mail)) {}
  else {
    document.getElementById("err-mail").textContent = "メールアドレスの形式ではありません。";
    document.getElementById("err-mail").style.color = "red";
    flag = flag + 1;
  }

  //flagが0より大きい場合処理を中断(エラーの場合は1が加算されていく)
  if (flag > 0) {
    return false;
  }

  //ありがとうございます。のページへ移動
  location.href = "page2.html"
}