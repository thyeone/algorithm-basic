function solution(arr) {
  const dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
