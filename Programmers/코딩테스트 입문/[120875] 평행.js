function solution(dots) {
  const arr = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];
  let incline1, incline2;

  for (let i of arr) {
    incline1 =
      Math.abs(dots[i[0]][1] - dots[i[1]][1]) /
      Math.abs(dots[i[0]][0] - dots[i[1]][0]);
    incline2 =
      Math.abs(dots[i[2]][1] - dots[i[3]][1]) /
      Math.abs(dots[i[2]][0] - dots[i[3]][0]);

    if (incline1 === incline2) return 1;
  }

  return 0;
}
