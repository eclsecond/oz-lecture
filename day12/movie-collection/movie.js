const movies = [
  {
  title: "케이팝 데몬 헌터스",
  director: "매기 강",
  year: 2025,
  genre: "animation",
  },
  {
    title: "타이타닉",
    director: "크리스토퍼 놀란",
    year: 2014,
    genre: "SF",
  },
  {
    title: "범죄도시",
    director: "강윤성",
    year: 2017,
    genre: "갱스터",
  },
  {
    title: "클래식",
    director: "곽재용",
    year: 2003,
    genre: "드라마",
  },
  {
    title: "맘마미아",
    director: "올 파커",
    year: 2008,
    genre: "뮤지컬",
  }
];


function printMovies(data){
  for(i=0 ; i<data.length ;i++) {
    console.log(i, data[i]);
  }

}
console.log("Movie Collection:\n");
printMovies(movies);
console.log(`Total Moves: ${movies.length}`);