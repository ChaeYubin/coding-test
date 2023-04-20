const solution = (array) => {
  if (array.length == 1)
    // array 길이가 1인 경우 바로 리턴
    return array[0];

  // 가장 큰 값을 찾아 그 수만큼 0으로 채워진 배열 생성
  let count = new Array(Math.max(...array) + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  let max = Math.max(...count);

  return count.indexOf(max) == count.lastIndexOf(max) ? count.indexOf(max) : -1;
};
