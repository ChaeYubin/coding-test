function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((s) => skip.indexOf(s) === -1);
  let idx = 0;
  return s
    .split("")
    .map((v) => {
      idx = (alphabet.indexOf(v) + index) % alphabet.length;
      return alphabet[idx];
    })
    .join("");
}
