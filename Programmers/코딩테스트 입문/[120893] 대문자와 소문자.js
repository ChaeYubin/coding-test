function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    let ascii = my_string.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) answer += my_string[i].toLowerCase();
    else answer += my_string[i].toUpperCase();
  }
  return answer;
}
