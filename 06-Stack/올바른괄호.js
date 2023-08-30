function solution(str) {
  let arr = [];

  for (let x of str) {
    if (x === '(') arr.push(x);
    else arr.pop();
  }

  return arr.length > 0 ? 'NO' : 'YES';
}

let a = '(()(()))(()';
console.log(solution(a));
