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

function krw(aNumber) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(aNumber / 100);
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
  // 값이 바뀌지 않는 변수는 매개변수로 전달
  let result = 0; // 변수를 초기화하는 코드
  switch (playFor(aPerformance).type) {
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
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }
  return result;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내열 (고객명: ${invoice[0].customer})\n`;

  for (const perf of invoice[0].performances) {
    // 청구 내역을 출력
    result += `    ${playFor(perf).name}: ${krw(amountFor(perf))} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf);
  }

  for (const perf of invoice[0].performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  result += `총액: ${krw(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result.trim();
}

console.log(statement(invoices, plays));
