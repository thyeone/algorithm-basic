function solution(budget, product) {
  let answer = 0;
  const n = arr.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < product.length; i++) {
    const [price, delivery] = product[i];
    let money = budget - (price / 2 + delivery);
    let cnt = 1;
    for (let j = 0; j < product.length; j++) {
      const [price, delivery] = product[j];
      if (j === i) continue;
      if (price + delivery > money) break;
      if (price + delivery <= money) {
        money -= price + delivery;
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
