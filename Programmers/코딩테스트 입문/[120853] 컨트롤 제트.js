function solution(s) {
  let answer = 0;
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "Z") {
      answer -= Number(str[i - 1]);
    } else {
      answer += Number(str[i]);
    }
  }

  return answer;
}
