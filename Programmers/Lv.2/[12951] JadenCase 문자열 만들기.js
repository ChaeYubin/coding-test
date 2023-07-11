function solution(s) {
  const string = s.toLowerCase();
  return string
    .split("")
    .map((v, index) => {
      if (index == 0 || string[index - 1] === " ") return v.toUpperCase();
      else return v;
    })
    .join("");
}
