alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // [x] 1, 2 가 차례로 출력. alert는 값을 반환하지 않음. undefined임!!
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // [x] 1 undefined. undefined라 false.
alert(null || (2 && 3) || 4); // [x] 3. 2 && 3 연산 결과가 3
