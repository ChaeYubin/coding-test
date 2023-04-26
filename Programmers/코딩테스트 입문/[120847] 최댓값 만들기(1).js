function solution(numbers) {
  let answer = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  answer *= Math.max(...numbers);
  return answer;
}
