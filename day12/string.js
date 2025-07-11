const pw = "123" ;
console.log(pw.length);
if(pw.length<4) {
    console.log("최소4자리 입력하세요.");
}

const email = "test@naver.com"
if(!email.includes("@")) {
   console.log("이메일 형식 확인하세요");
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email[4]);
console.log(email.indexOf("@")); //indexof 는 문자를 포함하지 않으면 -1 반환