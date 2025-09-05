let money = 810;
const cost = 10;
const jackpot = 810;

const slotImages = ["1.png", "2.png", "3.png", "4.png", "5.png"];

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
    const randImg = slotImages[Math.floor(Math.random() * slotImages.length)];
    slot.src = randImg;
  }, 100);

  setTimeout(() => {
    clearInterval(spin);

    // 最終的に止まる絵柄
    const finalImg = slotImages[Math.floor(Math.random() * slotImages.length)];
    slot.src = finalImg;

    if (index === 2) checkResult(); // 最後に判定
  }, 2000 + index * 500);
}

function checkResult() {
  const slots = [
    document.getElementById("slot1").src,
    document.getElementById("slot2").src,
    document.getElementById("slot3").src
  ];

  // "1.png" が揃ったら当たり
  if (slots.every(src => src.includes("1.png"))) {
    money += jackpot;
    document.getElementById("winSound").play();
    alert("イキスギィ! 大当たりだゾ！");
  } else {
    console.log("辞めたくなりますよ～この仕事");
  }

  document.getElementById("money").textContent = money;
}
