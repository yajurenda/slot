let money = 810;
const cost = 10;
const jackpot = 810;

// 出現確率テーブル（1.pngは5%、2-5.pngで95%を分割）
const weightedImages = [
  { src: "1.png", weight: 0.05 },
  { src: "2.png", weight: 0.2375 },
  { src: "3.png", weight: 0.2375 },
  { src: "4.png", weight: 0.2375 },
  { src: "5.png", weight: 0.2375 }
];

document.getElementById("play").addEventListener("click", playSlot);

function playSlot() {
  if (money < cost) {
    alert("お金がないです。†悔い改めて†");
    return;
  }
  money -= cost;

  const slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3")
  ];

  slots.forEach((slot, index) => spinSlot(slot, index));

  document.getElementById("money").textContent = money;
}

function spinSlot(slot, index) {
  let spin = setInterval(() => {
    // 演出用にランダム画像を表示（均等ランダム）
    const rand = Math.floor(Math.random() * weightedImages.length);
    slot.src = weightedImages[rand].src;
  }, 100);

  setTimeout(() => {
    clearInterval(spin);

    // 確率テーブルから最終画像を選ぶ
    slot.src = getWeightedRandomImage();

    if (index === 2) checkResult();
  }, 2000 + index * 500);
}

function getWeightedRandomImage() {
  const r = Math.random();
  let sum = 0;
  for (let img of weightedImages) {
    sum += img.weight;
    if (r < sum) return img.src;
  }
  return weightedImages[weightedImages.length - 1].src;
}

function checkResult() {
  const slots = [
    document.getElementById("slot1").src,
    document.getElementById("slot2").src,
    document.getElementById("slot3").src
  ];

  if (slots.every(src => src.includes("1.png"))) {
    money += jackpot;
    document.getElementById("winSound").play();
    alert("イキスギィ! 大当たりだゾ！");
  } else {
    console.log("辞めたくなりますよ～この仕事");
  }

  document.getElementById("money").textContent = money;
}
