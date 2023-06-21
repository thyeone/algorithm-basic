function solution(arr) {
  let count = 0;
  let max = 0;

  for (i of arr) {
    if (i > max) {
      count++;
      max = i;
    }
  }
  return count;
}

const N = 8;

let arr = [130, 135, 148, 140, 145, 150, 150, 153];

// output: 5

console.log(solution(arr));
