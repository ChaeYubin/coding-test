function solution(chicken) {
  let answer = 0;
  let coupon = 0;

  while (chicken > 0) {
    coupon += chicken;
    answer += Math.floor(coupon / 10);
    chicken = Math.floor(coupon / 10);
    coupon %= 10;
  }

  return answer;
}
