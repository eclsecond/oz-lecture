
function gugudan3() {
for (let i=1; i<10;i++) {
    console.log(`3*${i}=${3*i}`);
}
}

gugudan3();

//함수 정의 - 함수 표현식
const gugudan4 = function () {
    for (let i=1; i<10;i++) {
    console.log(`4*${i}=${4*i}`);
}
}

gugudan4();

const gugudan5 =  () => {
    for (let i=1; i<10;i++) {
    console.log(`5*${i}=${5*i}`);
}
}

gugudan5();

const gugudan=(dan) => {
    for(let i=1 ; i<=9;i++){
        console.log(`${dan}*${i}=${dan*i}`)
    }
}
for (let i=1 ; i <=9; i++) {
    console.log(gugudan(i));
}

function sum(scores) {
    let sumVal = 0;
    for (const score of scores) {
    sumVal += score;
    }
    return sumVal ;
}

let math = 70;
let english = 90 ;
let social = 80;
let science = 100 ;
let music = 70 ;
const scores = [math, english, social, music, science];

const total = sum(scores);


function avg(num1 =10, num2=20) {
    return(num1+num2) / 2;
}
const average = avg();

function sumDeclare (num1,num2) {
    return num1 + num2 ;
}

const sumArrow = (num1, num2) => num1+num2 ;


