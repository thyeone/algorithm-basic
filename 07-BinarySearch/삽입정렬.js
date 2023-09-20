// 내가 짠 삽입정렬
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }

  return arr;
}

function solution1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }
    console.log(temp);

    arr[j + 1] = temp;
  }

  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution1(arr));
