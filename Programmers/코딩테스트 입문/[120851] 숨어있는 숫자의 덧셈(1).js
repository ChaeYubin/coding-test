function solution(my_string) {
  let numArr = my_string.match(/\d/g).map((v) => Number(v));
  return numArr.reduce((acc, cur) => acc + cur);
}
