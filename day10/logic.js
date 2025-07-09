let math = 80;
let avg = 90;
let english = 100;
let isMathLowAvg = math < avg ;
console.log(isMathLowAvg); // true

let isEnglishLowAvg = english < avg;
console.log(isEnglishLowAvg); // false

console.log(isMathLowAvg && isEnglishLowAvg); // false
console.log(isMathLowAvg || isEnglishLowAvg); // true

console.log(!false);
console.log(!true);
console.log(!true && false);

