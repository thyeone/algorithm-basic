function solution(N, arr) {
  let answer = new Array(N).fill(0);

  arr.forEach((v) => {
    let pos;
    for (let i = 0; i < N; i++) if (v === answer[i]) pos = i;

    if (!pos) {
      for (let i = N - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }

    answer[0] = v;
    console.log(answer);
  });
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
