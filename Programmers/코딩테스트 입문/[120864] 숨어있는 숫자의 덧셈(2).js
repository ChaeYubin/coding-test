function solution(my_string) {
  var arr = my_string.split(/[A-z]/g);
  return arr.reduce((acc, cur) => (cur ? acc + Number(cur) : acc), 0);
}
