document.getElementById("answer").onclick = function() {
  //回答＝アメリカ、鳥取、長野

  var answer_point = 0;

  //問題１の選択を取得
  if (document.querySelector("input[name='question1']:checked").value === "2") {
    answer_point = answer_point + 1;　//正解なら１ポイント獲得
  }

  //問題２の選択を取得
  if (document.querySelector("input[name='question2']:checked").value === "3") {
    answer_point = answer_point + 1;　//正解なら１ポイント獲得
  }

  //問題２の選択を取得
  if (document.querySelector("input[name='question3']:checked").value === "2") {
    answer_point = answer_point + 1;　//正解なら１ポイント獲得
  }

  var close = document.getElementById("close");
  var modal = document.getElementById("modal");
  var mask = document.getElementById("mask");

  mask.classList.remove('hidden');
  modal.className = modal.className.replace("modal", "modal show");
  // modal.classList.replace("modal", "modal show"); これではエラーになる

  document.getElementById("result").textContent = ("正解率は" + Math.floor((answer_point / 3) * 100) + "％でした。"); //成果率の表示

  close.onclick = function() {
    modal.className = modal.className.replace("modal show", "modal");
    mask.classList.add('hidden'); //「閉じる」をクリックするとモーダルを閉じる
  }
  mask.onclick = function() {
    modal.className = modal.className.replace("modal show", "modal");
    mask.classList.add('hidden'); //モーダル範囲外をクリックするとモーダルを閉じる
  }
}