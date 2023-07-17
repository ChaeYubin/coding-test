function solution(n, words) {
  let answer = [0, 0]; // 탈락자가 없는 경우 리턴될 결과값

  for (let i = 1; i < words.length; i++) {
    // words의 인덱스
    const before = words[i - 1][words[i - 1].length - 1];
    const after = words[i][0]; // 비교할 문자열의 첫번째 글자

    if (before === after) {
      // 끝말잇기에 성공했다면
      for (let j = 0; j < i; j++) {
        if (words[i] === words[j]) {
          // 그전에 같은게 있었다면
          return (answer = [(i % n) + 1, parseInt(i / n) + 1]);
        }
      }
    } else {
      answer = [(i % n) + 1, parseInt(i / n) + 1];
      break;
    }
  }

  return answer;
}
