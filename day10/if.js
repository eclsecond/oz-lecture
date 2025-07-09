let num = 0;
if (num > 0) {
    console.log("양수입니다.");
}
else if (num < 0) {
    console.log("음수입니다.");
}
else {
    console.log("0입니다.");
}
const LIMIT = 80 ;
let score = 91;

if (score < LIMIT) {
    console.log("불합격입니다.");
}
else { if(score>90) {
    console.log("우수합격입니다.");
}
    else if(score >80) {
        console.log("합격입니다.");
    }
}