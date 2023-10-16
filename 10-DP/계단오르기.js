function solution(N) {
  let dy = Array.from({ length: N + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= N; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[N];
}

console.log(solution(7));
