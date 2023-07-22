// 내 풀이 1
function solution(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const reverse = parseInt(String(arr[i]).split('').reverse().join(''));
    if (isPrime(reverse) && reverse !== 1) {
      array.push(reverse);
    }
  }
  const answer = [...new Set(array)];
  return answer;
}

function isPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
