function solution(N) {
  let answer = '';
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(Math.floor(L / 2));
      answer += L % 2; // DFS 함수를 answer 위에 선언
    }
  }

  DFS(N);

  return answer;
}

console.log(solution(11));
