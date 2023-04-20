function solution(num_list) {
  let answer = [...num_list];
  for (let i = 0; i < Math.floor(answer.length / 2); i++) {
    let temp;
    temp = answer[i];
    answer[i] = answer[answer.length - i - 1];
    answer[answer.length - i - 1] = temp;
  }
  return answer;
}
