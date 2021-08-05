// prompt를 실행할 때 default 값을 넣어주자
let adminUser = prompt("너 누구?", "");

if (adminUser === null) {
  alert("취소 버튼 누름");
} else if (adminUser !== "Admin") {
  alert("너 모름");
} else {
  let adminPassword = prompt("비번?", "");
  if (adminPassword === null) {
    alert("취소 버튼 누름");
  } else if (adminPassword !== "TheMaster") {
    alert("비번 틀림");
  } else {
    alert("어서왕!");
  }
}
