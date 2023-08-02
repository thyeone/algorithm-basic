// 내 풀이, 시간 복잡도 : O(n²)
function solution(K, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < i + K; j++) {
      temp += arr[j];
    }
    if (sum < temp) sum = temp;
  }
  return sum;
}

// 슬라이딩 윈도우
function solution(K, arr) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < K; i++) {
    sum += arr[i];
    answer = sum;
  }

  for (let j = K; j < arr.length; j++) {
    sum += arr[j] - arr[j - K];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
