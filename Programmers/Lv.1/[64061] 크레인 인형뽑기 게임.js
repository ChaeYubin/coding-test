function solution(board, moves) {
  // board의 행과 열 변환
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < i; j++)
      [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
  }

  // board에서 0 제거하기 (첫 번째, 즉 뽑을 인형에 더 쉽게 접근하기 위해서)
  const noZeroBoard = board.map((arr) => arr.filter((v) => v !== 0));

  // 뽑은 인형을 넣을 배열
  const result = [];

  // 터트러져 사라진 인형의 개수
  let answer = 0;

  moves.map((v) => {
    let doll = noZeroBoard[v - 1].shift(); // 인형 뽑기
    if (doll !== undefined) {
      if (result[result.length - 1] === doll) {
        // 방금 뽑은 인형이 result의 맨 위에 있는 인형과 같다면
        result.pop(); // 같은 인형 빼기
        answer += 2;
      } else {
        // 방금 뽑은 인형이 result의 맨 위에 있는 인형과 같지 않다면
        result.push(doll); // result에 인형 추가
      }
    }
  });

  return answer;
}
