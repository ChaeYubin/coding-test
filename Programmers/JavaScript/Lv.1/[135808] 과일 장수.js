function solution(k, m, score) {
  const sortedScore = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 1; i <= parseInt(score.length / m); i++) {
    result += sortedScore[m * i - 1] * m;
  }

  return result;
}
