function solution(arr) {
  if (!arr.includes(2)) return [-1];

  let first = arr.indexOf(2);
  let last = arr.lastIndexOf(2);

  return first === last ? [2] : arr.slice(first, last + 1);
}
