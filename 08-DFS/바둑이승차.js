function solution(C, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr = arr.sort((a, b) => b - a);

  function DFS(L, sum) {
    if (sum >= C) return;

    if (L === arr.length) answer = Math.max(answer, sum);
    else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
