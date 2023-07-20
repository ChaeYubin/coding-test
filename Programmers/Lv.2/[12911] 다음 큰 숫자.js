function solution(n) {
  const len = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  let nextNum = n + 1;

  while (1) {
    if (
      len ===
      nextNum
        .toString(2)
        .split("")
        .filter((v) => v === "1").length
    )
      return nextNum;
    nextNum++;
  }
}
