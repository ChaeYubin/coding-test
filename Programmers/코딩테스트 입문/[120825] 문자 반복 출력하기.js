function solution(my_string, n) {
  let answer = [...my_string]
    .map((char) => {
      return char.repeat(n);
    })
    .join("");
  return answer;
}
