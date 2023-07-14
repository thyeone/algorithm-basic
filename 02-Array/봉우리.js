// 1차풀이

function solution1(arr) {
  let answer = 0;
  const n = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag === 1) answer++;
    }
  }
  return answer;
}

// 2차풀이
function solution2(arr) {
  let count = 0;
  const n = arr.length;
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = false;
          break;
        }
      }
      if (flag) count++;
    }
  }
  return count;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution1(arr));
console.log(solution2(arr));
