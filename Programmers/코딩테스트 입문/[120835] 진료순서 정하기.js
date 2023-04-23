function solution(emergency) {
  let answer = [];

  for (let i = 1; i <= emergency.length; i++) {
    let max_index = emergency.indexOf(Math.max(...emergency));
    answer[max_index] = i;
    emergency[max_index] = 0;
  }

  return answer;
}
