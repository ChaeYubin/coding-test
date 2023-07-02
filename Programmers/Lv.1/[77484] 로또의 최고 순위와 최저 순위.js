function solution(lottos, win_nums) {
  let same = 0;
  let zeroCnt = 0;

  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) {
      zeroCnt++;
    } else {
      for (let j = 0; j < 6; j++) {
        if (lottos[i] === win_nums[j]) same++;
      }
    }
  }

  return [
    same + zeroCnt >= 6 ? 1 : same + zeroCnt === 0 ? 6 : 7 - (same + zeroCnt),
    same <= 1 ? 6 : 7 - same,
  ];
}
