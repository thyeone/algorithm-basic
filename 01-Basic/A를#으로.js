function solution(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'A') {
      word[i] = word[i].replace('#');
    }
  }
}
let word = 'BANANA';
console.log(solution(word));
