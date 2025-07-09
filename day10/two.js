//후치연산

let increment = 10;
console.log("1", increment); // 1 10
increment ++;
console.log("2", increment); // 2 11
console.log("3", increment++); // 3 11
console.log("4", increment); 

let decrement = 10;
console.log("dec1", decrement); // 5 10
decrement --;
console.log("dec2", decrement); // 6 9
console.log("dec3", decrement--); // 7 9
console.log("dec4", decrement); // 8 8


//전치연산
let incFirst = 10;
console.log("incFirst1", incFirst); // 9 10
console.log("incFirst2", ++incFirst); // 10 11
console.log("incFirst3", incFirst); // 11 11


let decFirst = 10;
console.log("decFirst1", decFirst); // 12 10
console.log("decFirst2", --decFirst); // 13 9
console.log("decFirst3", decFirst); // 14 9 

// 부정연산
let num = -10;
num= -num; // -10 * -1 = 10
console.log("num", num); // 15 -10

let num2 = false;
num2 = -num2; // -1 * -1 = 1
console.log("num2", num2); // 16 -1