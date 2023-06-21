function solution(s, t) {
  s = s.split('');
  return s.filter((v) => v === t).length;
}

let s = 'COMPUTERPROGRAMING';
let t = 'R';

console.log(solution(s, t));
