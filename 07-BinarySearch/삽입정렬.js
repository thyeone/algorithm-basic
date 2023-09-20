// 내가 짠 삽입정렬
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
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
console.log(solution(arr));
