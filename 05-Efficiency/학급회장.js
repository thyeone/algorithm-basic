// 내 풀이
function solution1(str) {
  let answer = 0;
  const map = new Map();
  str = str.split('');

  str.forEach((v, idx) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });

  const newMap = Array.from(map);

  newMap.sort((a, b) => b[1] - a[1]);

  answer = newMap[0][0];

  return answer;
}

// 강사 풀이
function solution2(str) {
  let answer = 0;
  const map = new Map();
  str = str.split('');

  str.forEach((v, idx) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution2(str));
