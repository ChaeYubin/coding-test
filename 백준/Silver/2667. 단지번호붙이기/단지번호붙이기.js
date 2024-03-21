const fs = require("fs");

// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 정리
const N = Number(input[0]);
let board = [];

for (i = 0; i < N; i++) {
  board[i] = input[i + 1].split("").map((v) => Number(v));
}

// 풀이
const dRow = [-1, 0, 1, 0];
const dColumn = [0, 1, 0, -1];
let houseCount = 0; // 각 단지별 집의 개수
const answer = [];

function DFS(row, column) {
  // 집을 발견한 지점부터 근접한 집들을 모두 방문한다.
  for (let i = 0; i < 4; i++) {
    const nextRow = row + dRow[i];
    const nextColumn = column + dColumn[i];

    if (
      nextRow >= 0 &&
      nextRow < N &&
      nextColumn >= 0 &&
      nextColumn < N &&
      board[nextRow][nextColumn] === 1
    ) {
      board[nextRow][nextColumn] = 0;
      houseCount++;
      DFS(nextRow, nextColumn);
    }
  }
}

function solution() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        // 집을 발견했다.
        houseCount = 1; // 새로운 단지를 발견한 것과 마찬가지이므로, houseCount를 1로 초기화한다.
        board[i][j] = 0; // 방문한 지점을 0으로 바꾼다.
        DFS(i, j); // 근접한 집들을 모두 방문하고, 방문한 집들을 0으로 바꿔 다시 방문할 수 없도록 한다.
        answer.push(houseCount);
      }
    }
  }

  answer.sort((a, b) => a - b); // 각 단지내 집의 수를 오름차순으로 정렬

  answer.unshift(answer.length);

  return answer.join("\n");
}

console.log(solution());
