function solution(ineq, eq, n, m) {
  let answer;
  if (ineq == "<" && eq == "=") {
    answer = n <= m;
  } else if (ineq == "<" && eq == "!") {
    answer = n < m;
  } else if (ineq == ">" && eq == "=") {
    answer = n >= m;
  } else {
    answer = n > m;
  }
  return answer == true ? 1 : 0;
}
