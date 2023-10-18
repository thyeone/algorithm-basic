function solution(N, F) {
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모이제이션 하기 위한 dy 배열
  let ch = Array.from({ length: N + 1 }, () => 0); // 메모이제이션 하기 위한 check 배열
  let p = Array.from({ length: N }, () => 0); // 순열 넣는 배열
  let b = Array.from({ length: N }, () => 0); // 조합값 저장

  let answer;
  let flag = 0;

  function combi(N, R) {
    if (dy[N][R] > 0) return dy[N][R]; // 0이 아닌 값이 존재한다면 dy[N][R]을 반환
    if (N === R || R === 0) return 1; // 1을 반환
    else return (dy[N][R] = combi(N - 1, R - 1) + combi(N - 1, R)); //
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === N && sum === F) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    b[i] = combi(N - 1, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
