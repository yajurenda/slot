let money = 810;
const cost = 10;
const jackpot = 810;
const probability = 0.081019;

document.getElementById("play").addEventListener("click", playSlot);

function playSlot() {
  if (money < cost) {
    alert("お金がないです。†悔い改めて†");
    return;
  }

  money -= cost;

  // ランダムな目を決定（1〜4の範囲）
  const results = [
    Math.floor(Math.random() * 4) + 1,
    Math.floor(Math.random() * 4) + 1,
    Math.floor(Math.random() * 4) + 1
  ];

  // slot.pngをそのまま使う場合 → 今は同じ画像だけど、拡張余地あり
  document.getElementById("slot1").src = "slot.png";
  document.getElementById("slot2").src = "slot.png";
  document.getElementById("slot3").src = "slot.png";

  // 当たり判定
  if (Math.random() < probability) {
    money += jackpot;
    document.getElementById("winSound").play();
    alert("イキスギィ! 当たりだゾ！");
  } else {
    console.log("辞めたくなりますよ～この仕事");
  }

  document.getElementById("money").textContent = money;
}
