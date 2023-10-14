function solution(coins, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > m || L >= answer) return;

    if (sum === m) {
      console.log(L, sum);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 2, 5], 15));
