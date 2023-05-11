function solution(dots) {
  // map 함수를 2번 쓰는 것보다는 for문 하나를 쓰는 것이 더 나았을 것 같다.
  const x = dots.map((v) => v[0]);
  const y = dots.map((v) => v[1]);
  const x_len = Math.max(...x) - Math.min(...x);
  const y_len = Math.max(...y) - Math.min(...y);
  return x_len * y_len;
}
