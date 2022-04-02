// 인라인 하기

const moreThanFiveLateDeliveries = (driver) => {
  return driver.numberOfLateDeliveries > 5;
}

const getRating = (driver) => {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

const refactoring = (driver) => {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1 ;
}

// 위임 관계가 복잡하게 얽혀 있으면 인라인

const obj = {
  numberOfLateDeliveries: 6
}

console.log(refactoring(obj))
