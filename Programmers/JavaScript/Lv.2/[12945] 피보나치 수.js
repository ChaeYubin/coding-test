function solution(n) {
  const fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo.push(BigInt(fibo[i - 2]) + BigInt(fibo[i - 1]));
  }

  return fibo[n] % BigInt(1234567);
}
