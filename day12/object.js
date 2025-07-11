console.log("객체 실습");

const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    age : 20,
    isAdult: true,

    getFullName: function(isKorean) {
        const fullName = isKorean ? `${this.name.firstName} ${this.name.lastName}` :
        `${this.name.firstName} ${this.name.lastName}` ;
        return fullName;
    },

    printInfo: function() {
        console.log("printInfo");
        console.log(`
            ${this.name.firstName}
            ${this.name.lastName}
            ${age}`);
    },
} ;

console.log(person);


//person의 age, isAdult  조회방법

let age = person.age ;
console.log(age);

let isAdult = person.isAdult ? "성인" : "미성년자" ;
console.log(isAdult);

let isAdult2 = person["isAdult"] ? "성인" : "미성년자" ;

let keys =[];
for (const key in person){
    keys.push(key);
}

console.log(keys);
console.log(keys[0]);
const keyFirstValue = person[keys[0]];
for (const key of keys) {
    console.log("key",key);
    console.log("person[key]",person[key]);
}

//객체의 함수사용
person.printInfo();

//객체에 속성추가
person.like = "apple";
person.koreaAge = 22;
person.likes = ["taegu","coffee",2,true];



