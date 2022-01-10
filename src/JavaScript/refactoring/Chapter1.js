let plays = {};

const playsMake = (title, name, type) => {
  plays[title] = { name, type };
  return;
};

playsMake("hamlet", "Hamlet", "tragedy");
playsMake("as-like", "As You Like It", "comedy");
playsMake("othello", "Othello", "tragedy");

let invoices = [
  {
    customer: "BigCo",
    performances: [],
  },
];

const performancesMake = (playID, audience) => {
  const { performances } = invoices[0];
  performances.push({ playID, audience });
  return;
};

performancesMake("hamlet", 55);
performancesMake("as-like", 35);
performancesMake("othello", 40);

function amountFor(aPerformance, play) {
  // 값이 바뀌지 않는 변수는 매개변수로 전달
  let result = 0; // 변수를 초기화하는 코드
  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }

      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return result;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내열 (고객명: ${invoice[0].customer})\n`;
  const format = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format;

  for (const perf of invoice[0].performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공.
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력
    result += `    ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result.trim();
}

console.log(statement(invoices, plays));
