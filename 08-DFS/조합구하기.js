function solution(N, M) {
  let answer = [];
  let tmp = Array.from({ length: M }, () => 0);

  function DFS(L, s) {
    if (L === M) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer.length;
}

console.log(solution(4, 2));
