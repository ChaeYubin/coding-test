function solution(my_string) {
  let vowels = ["a", "e", "i", "o", "u"];

  return my_string
    .split("")
    .map((v) => {
      if (!vowels.includes(v)) return v;
    })
    .join("");
}
