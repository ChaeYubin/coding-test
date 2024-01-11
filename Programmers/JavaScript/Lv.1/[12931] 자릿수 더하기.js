function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((a, c) => Number(a) + Number(c), 0);
}
