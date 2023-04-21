function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((l) => l !== letter)
    .join("");
}
