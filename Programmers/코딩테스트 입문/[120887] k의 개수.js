function solution(i, j, k) {
  let answer = 0;
  const strK = k.toString();

  for (let a = i; a <= j; a++) {
    const s = a.toString();
    answer += s.split("").filter((v) => v === strK).length;
  }

  return answer;
}
