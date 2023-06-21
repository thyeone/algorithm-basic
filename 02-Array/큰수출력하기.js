function solution(arr, N) {
  const answer = [];
  answer.push(arr[0]);
  arr.forEach((element, idx) => {
    if (idx > 0 && element > arr[idx - 1]) {
      answer.push(element);
    }
  });
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
const N = 5;

console.log(solution(arr, N));
