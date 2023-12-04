function solution() {
  let answer = '';
  const queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (let i of [v * 2, v * 2 + 1]) {
      if (i > 7) break;
      queue.push(i);
    }
  }

  return answer;
}

console.log(solution());
