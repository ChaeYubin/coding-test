function factorial(n) {
  if (n === 0 || n === 1) return BigInt(1);
  else return BigInt(n) * BigInt(factorial(n - 1));
}

function solution(balls, share) {
  let answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return answer;
}
