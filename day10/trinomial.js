//삼항 연산자
let scrore = 90;
let grade = scrore >= 90 ? 'A+' : 'A';
console.log(grade); // A+

let math = 80;
let avg = 90;
let english = 100;
let isMathLowAvg = math < avg ;
console.log(isMathLowAvg); // true

let isEnglishLowAvg = english < avg;
console.log(isEnglishLowAvg); // false

let AvgGrade = isMathLowAvg ? "수학점수 평균 이하" : "수학점수 평균 이상";
console.log(AvgGrade); // 수학점수 평균 이하

let AvgEnglishGrade = isEnglishLowAvg ? "영어점수 평균 이하" : "영어점수 평균 이상";
console.log(AvgEnglishGrade); // 영어점수 평균 이상