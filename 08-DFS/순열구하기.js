function solution(M, arr) {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);

  function DFS(L) {
    if (L === M) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          temp[L] = arr[i];
          ch[i] = 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
