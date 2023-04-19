function solution(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
}
