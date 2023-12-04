function solution(N, arr) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let ch = Array.from({ length: N + 1 }, () => 0);

  for (const [A, B] of arr) {
    graph[A][B] = 1;
  }

  function DFS(v) {
    if (v === N) answer++;
    else {
      for (let i = 1; i <= N; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
