function solution(N, K, arr, M) {
  let tmp = Array.from({ length: K }, () => 0);
  let answer = 0;

  function DFS(L, S, sum) {
    if (L === K) {
      if (sum % M === 0) {
        answer++;
      }
    } else {
      for (let i = S; i < N; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
