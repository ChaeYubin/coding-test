function solution(orders) {
  let price = 0;
  for (order of orders) {
    if (order.includes("cafelatte")) {
      // "cafelatte"를 포함하지 않는 경우는 모두 4500원이다.
      price += 5000;
    } else {
      price += 4500;
    }
  }
  return price;
}
