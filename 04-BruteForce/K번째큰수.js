function solution(n, k, arr) {
  //   arr.sort((a, b) => b - a);
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  temp = Array.from(temp).sort((a, b) => b - a);

  return temp[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
