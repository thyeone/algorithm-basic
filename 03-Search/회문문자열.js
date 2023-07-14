// 풀이방법 1
function solution1(str) {
  let answer = 'YES';
  let len = str.length;
  str = str.toLowerCase();

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return 'NO';
    }
  }

  return answer;
}

// 풀이방법 2
function solution2(str) {
  let answer = 'YES';
  str = str.toLowerCase();

  return str.split('').reverse().join('') === str ? answer : 'NO';
}

let str = 'goooG';
// console.log(solution1(str));
console.log(solution2(str));

// output : YES or NO
