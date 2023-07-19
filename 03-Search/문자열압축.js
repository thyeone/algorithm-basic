function solution(str) {
  let answer = '';
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      if (cnt === 1) answer += String(str[i]);
      if (cnt > 1) answer += String(str[i] + cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));

// output: K2HS7E
