// 1. 짝을 만들 수 있는 변수 answer을 0으로 초기화
// 2. i,j는 각각 (i, j) 의 값, 1부터 이중 for문
// 3. for문을 통해 pi가 pj보다 작은 경우 count++
// 4. count의 수가 배열의 길이와 같을 경우 멘토, 멘티 짝을 만들 수 있는 것이므로 answer++

function solution(test) {
  let answer = 0;

  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      let count = 0;
      for (let k = 0; k < test.length; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < test[0].length; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === test.length) answer++;
    }
  }

  return answer;
}

let test = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(test));
