// 변수 추출하기

const price = (order) => {
  return order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

const refactoring = (order) => {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
}

const obj = {
  quantity: 10,
  itemPrice: 2_000
}

console.log(refactoring(obj))

// 변수 인라인하기
// 이름이 원래 표현식과 다를 바 없거나 변수 이름이 오히려 방해가 된다면 인라인화 시킨다.
