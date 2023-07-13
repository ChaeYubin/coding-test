function solution(A, B) {
  const ascending = A.sort((a, b) => a - b);
  const descending = B.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += ascending[i] * descending[i];
  }

  return result;
}
