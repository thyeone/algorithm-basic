function solution(M, arr) {
  arr.sort((a, b) => a - b);

  let answer = 0;

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentElement = arr[mid];

    if (currentElement > M) {
      max = mid - 1;
    } else if (currentElement === M) {
      answer = mid + 1;
      break;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// [12, 23, 32, 57, 65, 81, 87, 99]
