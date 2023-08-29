function solution(str1, str2) {
  const map1 = new Map();

  str1 = str1.split('');
  str2 = str2.split('');

  str1.forEach((v) => {
    if (map1.has(v)) map1.set(v, map1.get(v) + 1);
    else map1.set(v, 1);
  });

  for (let x of str2) {
    if (!map1.has(x) || map1.get(x) === 0) return 'NO';
    else map1.set(x, map1.get(x) - 1);
  }

  return 'YES';
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
