function solution(str) {
  let stack = [];
  let lt = 0;
  let rt = 0;

  for (x of str) {
    if (x !== '*' && x !== '+' && x !== '-') {
      stack.push(Number(x));
    } else {
      rt = stack.pop();
      lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else stack.push(lt * rt);
    }
  }

  return stack.join('');
}
let str = '352+*9-';

console.log(solution(str));
