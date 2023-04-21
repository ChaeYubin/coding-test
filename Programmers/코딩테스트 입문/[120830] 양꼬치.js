function solution(n, k) {
  let service = Math.floor(n / 10);
  let answer = n * 12000 + (k - service) * 2000;
  return answer;
}
