function solution(array, n) {
  array.sort((a, b) => a - b);
  let min = 100;
  let answer;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - n) < min) {
      min = Math.abs(array[i] - n);
      answer = array[i];
    }
  }
  return answer;
}
