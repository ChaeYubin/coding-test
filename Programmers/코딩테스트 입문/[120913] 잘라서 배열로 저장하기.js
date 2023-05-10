function solution(my_str, n) {
  let answer = [];
  let arr_my_str = my_str.split("");

  for (let i = 0; i < Math.floor(my_str.length / n); i++) {
    answer.push(arr_my_str.splice(0, n).join(""));
  }

  if (arr_my_str.length > 0) answer.push(arr_my_str.join(""));

  return answer;
}
