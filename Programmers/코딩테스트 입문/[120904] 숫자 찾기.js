function solution(num, k) {
  const arr = String(num).split("");
  return arr.indexOf(String(k)) == -1 ? -1 : arr.indexOf(String(k)) + 1;
}
