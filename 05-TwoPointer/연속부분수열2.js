function solution(M, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > M) sum -= arr[lt++];
    answer += rt - lt + 1;
  }

  console.log(sum);

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
