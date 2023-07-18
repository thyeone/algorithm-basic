const getTIndex = (str, t, TIndex) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      TIndex.push(i);
    }
  }
};

function solution(str, t) {
  str = str.split('');
  const TIndex = [];
  const answer = [];
  getTIndex(str, t, TIndex);
  for (let i = 0; i < str.length; i++) {
    const temp = [];
    TIndex.forEach((el) => {
      temp.push(Math.abs(i - el));
    });
    answer.push(Math.min(...temp));
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
