function solution(n) {
  let piece = 1;
  while (true) {
    if ((n * piece) % 6 == 0) {
      return (n * piece) / 6;
    } else {
      piece++;
    }
  }
}
