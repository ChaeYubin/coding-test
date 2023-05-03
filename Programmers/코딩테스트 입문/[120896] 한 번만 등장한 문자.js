function solution(s) {
  var answer = [];
  for (c of s) {
    if (s.indexOf(c) !== s.lastIndexOf(c)) continue;
    answer.push(c);
  }
  return answer.sort().join("");
}
