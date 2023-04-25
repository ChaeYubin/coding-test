function solution(num_list, n) {
  let answer = [];
  let arr = [];
  let count = 0;
  for (let i = 0; i < num_list.length; i++) {
    arr.push(num_list[i]);
    count++;
    if (count === n) {
      count = 0;
      answer.push(arr);
      arr = [];
    }
  }
  return answer;
}
