function solution(age) {
  var answer = "";
  var alpha = "abcdefghij";
  var str_age = age.toString();
  for (let i = 0; i < str_age.length; i++) {
    answer += alpha[Number(str_age[i])];
  }
  return answer;
}
