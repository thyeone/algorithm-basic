function solution(str) {
  const regex = /[^a-z]/g;
  str = str.toLowerCase().replace(regex, '');
  console.log(str);
  if (str.split('').reverse().join('') !== str) return 'NO';
  return 'YES';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
