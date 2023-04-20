function gcdFunc(a, b) {
  return b ? gcdFunc(b, a % b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];

  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  let gcd = gcdFunc(numer, denom);

  answer.push(numer / gcd, denom / gcd);

  return answer;
}
