function solution(N, arr) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => []);
  let ch = Array.from({ length: N + 1 }, () => 0);
  for (const [A, B] of arr) {
    graph[A].push(B);
  }

  function DFS(v) {
    if (v === N) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
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
