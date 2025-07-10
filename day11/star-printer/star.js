const maxStars = 10;
var star = "*"

do {
//입력
let inputStr = prompt("출력할 별 갯수를 입력하세요.(1~10)");
let input = Number(inputStr);


if (isNaN(input) || input < 0 || input > maxStars) {
    alert("Invalid input! Enter a number between 1 and 10");
    input = "Invalid";   
    }



//별함수정의
function printStars(rows) {
  let result = "";
  for (let i = rows ; i >=1 ; i--) {
    for (let j = 1; j <= i; j++) {
      result += star;
    }
    result += "\n";
  }
  console.log(result);
}

//입력값 출력
printStars(input);

if(input>=1 || input<=10) { break ; }

} while(input = "Invalid");