const person1 = {
    name: "taem",
    age: 33
}




function Person(name, age) {
    this.name = name;
    this.age =age ;
    this.greet = function() {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    }
}

const personA = new Person(`taem`,33);