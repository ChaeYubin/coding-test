function solution(board) {
  const n = board[0].length;
  const dangerous = [];

  for (let row = 0; row < board[0].length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 1) {
        const array = [
          [row - 1, col - 1],
          [row - 1, col],
          [row - 1, col + 1],
          [row, col - 1],
          [row, col],
          [row, col + 1],
          [row + 1, col - 1],
          [row + 1, col],
          [row + 1, col + 1],
        ];
        dangerous.push(
          ...array.filter(
            (v) => v[0] !== -1 && v[0] !== n && v[1] !== -1 && v[1] !== n
          )
        );
      }
    }
  }

  const setArray = [...new Set(dangerous.join("|").split("|"))];
  console.log(setArray);
  return n * n - setArray.length;
}
