const messages = [
  "今日は小さな一歩でも十分です。ちゃんと前に進んでいます。",
  "完璧じゃなくて大丈夫。続けようとしている自分をほめてください。",
  "今できることを1つ選べば、それだけで今日の勝ちです。",
  "疲れている日もあります。休むことも大切な前進です。",
  "あなたのペースで大丈夫です。比べる相手は昨日の自分だけです。",
  "ここまで来たことには、ちゃんと意味があります。",
  "深呼吸をひとつ。落ち着いてから始めれば大丈夫です。",
  "うまくいかない日も、あなたの価値は変わりません。",
  "今日のあなたは、今日できる分だけで十分です。",
  "迷っても止まっても、また始めれば続きになります。"
];

const messageElement = document.querySelector("#message");
const buttonElement = document.querySelector("#encourageButton");

function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
}

buttonElement.addEventListener("click", showRandomMessage);
