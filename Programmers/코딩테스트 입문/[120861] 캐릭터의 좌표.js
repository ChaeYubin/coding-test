function solution(keyinput, board) {
  let result = [0, 0];

  const w_lim = Math.floor(board[0] / 2);
  const h_lim = Math.floor(board[1] / 2);

  for (key of keyinput) {
    switch (key) {
      case "left":
        if (result[0] - 1 >= -1 * w_lim) result[0] -= 1;
        break;
      case "right":
        if (result[0] + 1 <= w_lim) result[0] += 1;
        break;
      case "up":
        if (result[1] + 1 <= h_lim) result[1] += 1;
        break;
      case "down":
        if (result[1] - 1 >= -1 * h_lim) result[1] -= 1;
        break;
    }
  }

  return result;
}
