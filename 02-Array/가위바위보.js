function solution(A, B) {
  const answer = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      answer.push('D');
    } else if (A[i] === 1 && B[i] === 3) {
      answer.push('A');
    } else if (A[i] === 2 && B[i] === 1) {
      answer.push('A');
    } else if (A[i] === 3 && B[i] === 2) {
      answer.push('A');
    } else {
      answer.push('B');
    }
  }
  return answer;
}

let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];

console.log(solution(A, B));

// output : A B A B D

// 1: 가위, 2: 바위, 3:보

// 1 vs 2 -> 2
// 1 vs 3 -> 1
// 2 vs 3 -> 3
