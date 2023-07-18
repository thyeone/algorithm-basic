function solution(str) {
  str = str.split('');
  let nums = '1234567890';
  nums = nums.split('');
  const answer = [];
  str.forEach((v) => nums.includes(v) && answer.push(v));

  return parseInt(answer.join(''));
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
