function solution(arr) {
  let answer = 'NO';
  const total = arr.reduce((acc, cur) => acc + cur);
  function DFS(L, sum) {
    if (L === arr.length) {
      if (total - sum === sum) answer = 'YES';
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
