const fruits = ["사과","바나나","오렌지"] ; 
const mixed = [1, "hello", true, { name: "홍길동"}] ;
fruits.push("딸기") ;
console.log(fruits);

//Array.pop 배열 마지막 요소 삭제, 삭제된 요소 반환

const removed = fruits.pop();
console.log(removed);

//Array.shift() 배열 첫번째 요소 삭제, 삭제된 요소 반환

const removedShift = fruits.shift() ;
console.log(removedShift);

//Array.unshift() 배열 요소 첫번째 인덱스에 추가
fruits.unshift("파인애플") ;
console.log(fruits);
