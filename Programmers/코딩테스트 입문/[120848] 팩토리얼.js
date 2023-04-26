function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function solution(n) {
  for (let i = 1; i <= 10; i++) {
    if (factorial(i) > n) return i - 1;
    if (factorial(i) === n) return i;
  }
}
