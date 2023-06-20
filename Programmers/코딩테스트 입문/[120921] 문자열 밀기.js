function solution(A, B) {
  let answer = 0;
  let string = "";

  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    A = A[A.length - 1] + A.slice(0, A.length - 1);
    string = A;
    answer++;

    if (string === B) return answer;
  }

  return -1;
}
