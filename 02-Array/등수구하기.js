function solution(arr) {
  let rank = new Array(5).fill(1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        rank[i]++;
      }
    }
  }
  console.log(rank);
  return rank;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// output: 4 3 2 1 5
