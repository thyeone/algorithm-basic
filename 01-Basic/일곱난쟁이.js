function solution(arr) {
  let answer = arr;
  let flag = false;
  const sum = arr.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        console.log(arr[i], arr[j]);
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
}

let arr = [17, 10, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// output: 20 7 23 19 10 8 13
