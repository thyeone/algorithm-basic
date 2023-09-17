function solution(A, B) {
  B = B.split('');
  const queue = [...A];

  for (let i = 0; i < B.length; i++) {
    if (queue.includes(B[i])) {
      if (B[i] !== queue.shift()) return 'NO';
    }
  }

  return queue.length ? 'NO' : 'YES';
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
