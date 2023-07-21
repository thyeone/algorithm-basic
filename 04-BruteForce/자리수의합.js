function solution(arr) {
  let answer;
  let max = 0;
  for (let num of arr) {
    let sum = 0;
    let temp = num;
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = num;
    } else if (max === sum && answer < num) {
      answer = num;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));

// output : 137
