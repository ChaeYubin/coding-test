function solution(arr1, arr2) {
  let answer;
  if (arr1.length == arr2.length) {
    let sum1 = arr1.reduce((sum, cur) => sum + cur, 0);
    let sum2 = arr2.reduce((sum, cur) => sum + cur, 0);
    answer = sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1;
  } else {
    answer = arr1.length > arr2.length ? 1 : -1;
  }
  return answer;
}
