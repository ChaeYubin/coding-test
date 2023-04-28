function solution(sides) {
  let max_len = sides.splice(sides.indexOf(Math.max(...sides)), 1);
  let sum = sides.reduce((acc, cur) => acc + cur);
  if (max_len < sum) return 1;
  return 2;
}
