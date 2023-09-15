function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' && str[i + 1] === ')') {
      answer += stack.length;
    } else if (str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ')' && str[i - 1] === '(') continue;
    else if (str[i] === ')') {
      stack.pop();
      answer += 1;
    }
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
