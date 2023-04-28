function solution(my_string) {
  return [...new Set(my_string.split(""))].join("");
  // Set은 문자열도 처리 가능
  // -> return [...new Set(my_string)].join("");
}
