function solution(N, K) {
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  let cnt = 0;

  while (queue.length > 1) {
    if (cnt === K - 1) {
      queue.shift();
      cnt = 0;
    } else {
      queue.push(queue.shift());
      cnt++;
    }
  }
  return queue.join('');
}

console.log(solution(8, 3));
