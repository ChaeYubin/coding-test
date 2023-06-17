function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function factorization(n) {
  let answer = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n = n / divisor;
    } else divisor++;
  }
  return [...new Set(answer)];
}

function solution(a, b) {
  const gcdResult = gcd(a, b); // a, b의 최대공약수
  const parent = b / gcdResult; // 기약분수로 나타냈을 때의 분모 값
  return factorization(parent).every((s) => s === 1 || s === 2 || s === 5)
    ? 1
    : 2;
}
