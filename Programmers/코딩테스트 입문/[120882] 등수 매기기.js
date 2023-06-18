function solution(score) {
  const result = new Array(score.length).fill(0);
  const average = score.map((v, index) => [index, (v[0] + v[1]) / 2]);

  average.sort((a, b) => b[1] - a[1]);

  let rank = 1;
  result[average[0][0]] = rank;
  let cnt = 1;

  for (let i = 1; i < score.length; i++) {
    if (average[i - 1][1] === average[i][1]) {
      result[average[i][0]] = rank;
      cnt++;
    } else {
      rank += cnt;
      result[average[i][0]] = rank;
      cnt = 1;
    }
  }

  return result;
}
