function solution(n) {
  var count = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // i가 1과 자기 자신이 아닌 약수를 가진다 -> 합성수
        count++;
        break;
      }
    }
  }
  return count;
}
