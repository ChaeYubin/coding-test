function solution(lines) {
  let arr = new Array(200).fill(0);

  for (let i of lines) {
    for (let j = i[0]; j < i[1]; j++) {
      let index = j + 100;
      arr[index] += 1;
    }
  }

  return arr.filter((v) => v >= 2).length;
}
