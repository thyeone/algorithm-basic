function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      console.log(arr[j], arr[j + 1]);
    }
  }
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
