function solution(dartResult) {
  let answer = [];

  const arr = dartResult.match(/\d{1,2}[SDT][*#]?/g);

  arr.map((v) => {
    const array = [v.match(/\d/g).join(""), v.match(/[SDT]/)[0]];
    if (v.match(/[*#]/)) array.push(v.match(/[*#]/)[0]);

    let res = parseInt(array[0]);

    if (array[1] === "D") res = Math.pow(res, 2);
    else if (array[1] === "T") res = Math.pow(res, 3);

    if (array.length === 3) {
      if (array[2] === "#") res *= -1;
      else if (array[2] === "*" && answer.length === 0) res *= 2;
      else {
        answer[answer.length - 1] *= 2;
        res *= 2;
      }
    }

    answer.push(res);
  });

  return answer.reduce((sum, cur) => sum + cur, 0);
}
