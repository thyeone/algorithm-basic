// 내 풀이
function solution1(str) {
  str = str.split('');

  let stack = [];
  let answer = '';

  str.forEach((v) => {
    if (v === '(') {
      stack.push(v);
    } else if (v === ')') {
      stack.pop();
    } else if (stack.length === 0) {
      answer += v;
    }
  });

  return answer;
}

// 강사님 풀이
function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
      // '('를 만날 때 까지 pop(), '('까지 pop하고 종료
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution1(str));
