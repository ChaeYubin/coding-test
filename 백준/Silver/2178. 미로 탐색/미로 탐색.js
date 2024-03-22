const fs = require("fs");

// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 정리
const inputSize = input[0].split(" ");
const N = Number(inputSize[0]);
const M = Number(inputSize[1]);
let board = [];

for (let i = 0; i < N; i++) {
  board[i] = input[i + 1].split("").map((v) => Number(v));
}

// 풀이
const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

// N X M 크기의 2차원 배열 생성(모두 0으로 초기화)
const dis = Array.from(new Array(N), () => new Array(M).fill(0));

function BFS(row, col) {
  const queue = [];
  queue.push([row, col]);

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextRow = currentRow + dRow[i];
      const nextCol = currentCol + dCol[i];

      // 갈 수 있는 통로라면
      if (
        nextRow >= 0 &&
        nextRow < N &&
        nextCol >= 0 &&
        nextCol < M &&
        board[nextRow][nextCol] === 1
      ) {
        queue.push([nextRow, nextCol]);
        board[nextRow][nextCol] = 0;
        dis[nextRow][nextCol] = dis[currentRow][currentCol] + 1;
      }
    }
  }
}

function solution() {
  dis[0][0] = 1;
  BFS(0, 0);

  return dis[N - 1][M - 1];
}

console.log(solution());
