function solution(N) {
  const dy = Array.from({ length: N + 2 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[N + 1];
}

console.log(solution(7));
