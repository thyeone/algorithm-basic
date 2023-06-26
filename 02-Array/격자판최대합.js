function solution(arr) {
  let answer = 0;
  let row = 0;
  let column = 0;
  let dialognal1 = 0;
  let dialognal2 = 0;

  // 행과 열
  for (let i = 0; i < arr.length; i++) {
    row = 0;
    column = 0;
    for (let j = 0; j < 5; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, row, column);
  }

  // 대각선
  for (let i = 0; i < arr.length; i++) {
    dialognal1 += arr[i][i];
    dialognal2 += arr[i][arr.length - 1 - i];
    answer = Math.max(answer, row, column, dialognal1, dialognal2);
  }

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// 4 0 3 1 2 2 1 3 0 4
