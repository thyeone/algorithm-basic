function solution(arr) {
  let answer;
  answer = arr.filter((v, idx) => {
    if (arr.indexOf(v) === idx) return true;
  });
  return answer;
}

let arr = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(arr));
// output: [good, time, student]
