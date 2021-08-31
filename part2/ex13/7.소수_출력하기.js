let num = prompt("자연수 입력하세요", 2);

for (let i = 2; i <= num; i++) {
  let j = 2;
  for (; j < i; j++) {
    if (i % j == 0) break;
  }
  if (i == j) alert(i);
}

// 레이블 사용
let num = prompt("자연수 입력하세요", 2);

nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}
