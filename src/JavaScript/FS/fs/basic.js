// 순수 함수를 통한 캐싱
const longRunningFunction = (ip) => {
  return ip;
};

const ip = 1;

const longRunningFnBookKeeper = { 2: 3, 4: 5 };
longRunningFnBookKeeper.hasOwnProperty(ip)
  ? longRunningFnBookKeeper[ip]
  : (longRunningFnBookKeeper[ip] = longRunningFunction(ip));

console.log(longRunningFnBookKeeper);
