function solution(board, moves) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop() && answer++;
      stack.pop() && answer++;
    }
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
