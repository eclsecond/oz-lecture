//map
let numbers = [1, 2, 3];

//numbers에 있는 모든 숫자 2배


numbers = numbers.map((num) => {
    return num *2;
});

console.log(numbers);

//filter
let numbersA = [1,2,3,4,5,6];

//짝수만
//let newNumbersA=[]
//for (const num of numbersA) {
//    if (num%2 === 0 ) newNumbersA.push(num);
//};

const even = function (num) {
    if (num%2===0) return num;
};

let newNumbersA = [];
for(const num of numbersA) {
    if (even(num)) newNumbersA.push(even(num));

}

numbersA = numbersA.filter((num)=>{return num%2===0;});
console.log(numbersA) ; 

//reduce
let numberB = [1,2,3,4];

// 배열에 있는 값의 총합
//let sum = 0 ;
//numberB. forEach((num) => {
//    sum += num;
//})
//console.log(sum);

const sum = numbersB.reduce((acc,num)=>acc+num,0);