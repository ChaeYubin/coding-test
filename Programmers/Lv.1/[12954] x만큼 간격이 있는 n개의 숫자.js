function solution(x, n) {
  return Array(n)
    .fill(0)
    .map((el, i) => {
      return x + x * i;
    });
}
