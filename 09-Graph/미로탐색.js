function solution(board) {
  let answer = 0;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  function DFS(y, x) {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && ny <= 6 && ny >= 0 && ny <= 6 && board[ny][nx] === 0) {
          board[ny][nx] = 1;
          DFS(ny, nx);
          board[ny][nx] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
