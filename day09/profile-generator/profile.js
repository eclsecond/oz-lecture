const myname = "주현돈"

var email = 'eclsecond@naver.com' ;

let phone = '010-4222-2466' ;

const address = '서울시_동작구_신대방동' ;

var hobbies = ['독서', '먹방', '여행', '요리', '운동'];

const isMarried = false;

const profile = {
  age : 44,
  isStudent : false,
  dream : '1인 개발자',
  workplan : '수학 게임',
  exemple : null,
};

let hello = `안녕하세요 저는 ${myname}입니다.`;
let homeAge = `저는 ${profile.age}살이고, 결혼은 ${isMarried ? '했습니다.' : '하지 않았습니다.'}`;
let local = `저는 ${address}에 살고 있습니다.`;
let contact = `제 이메일은 ${email}이고, 전화번호는 ${phone}입니다.`;
let hobby = `저는 보통 집에서 ${hobbies[0]}를 하고, 아침에는 주로 ${hobbies[4]}를 합니다.` ;
let hobby1 = `${hobbies[2]}은 보통 1년에 한두번 갑니다. 그리고 매일 ${hobbies[3]}을 직접 해서 ${hobbies[1]}을 즐깁니다.`;
let dream = `제 꿈은 ${profile.dream}이고, ${profile.workplan}을 만들고 싶습니다.`;              


// 자기소개
console.log("\t",hello,"\n",local,"\n",homeAge,"\n",hobby,"\n",hobby1,"\n",contact,"\n",dream);

// 타입확인
  console.log(typeof hobbies[0])
  console.log(typeof profile.age);
  console.log(typeof profile.isStudent);
  console.log(typeof profile.dream);
  console.log(typeof profile.workplan);
  console.log(typeof profile.exemple);
  console.log(typeof hello);
    console.log(typeof homeAge);
    console.log(typeof contact);
    console.log(typeof local);
    console.log(typeof hobby);
    console.log(typeof hobby1);
    console.log(typeof email);
    console.log(typeof phone);
    console.log(typeof address);