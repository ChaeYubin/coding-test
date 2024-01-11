function solution(absolutes, signs) {
  const realArr = signs.map((v, index) => {
    if (v == true) return absolutes[index] * 1;
    else return absolutes[index] * -1;
  });

  return realArr.reduce((sum, cur) => sum + cur, 0);
}
