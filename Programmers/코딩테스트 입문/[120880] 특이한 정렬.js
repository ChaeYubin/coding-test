function solution(numlist, n) {
  let arr = [];
  numlist.map((v, i) => arr.push([i, Math.abs(n - v)]));
  arr.sort((a, b) => {
    if (a[1] === b[1] && numlist[a[0]] > numlist[b[0]]) return -1;
    if (a[1] === b[1] && numlist[a[0]] < numlist[b[0]]) return 1;
    return a[1] - b[1];
  });

  return arr.map((v) => numlist[v[0]]);
}
