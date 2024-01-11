function solution(a, b) {
  let result1 = parseInt(`${a}${b}`);
  let result2 = 2 * a * b;
  return result1 > result2 ? result1 : result2;
}
