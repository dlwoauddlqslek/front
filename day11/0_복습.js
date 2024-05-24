// 1. 복습예제 : 특정 html(star1 div)에 ★을 5개 출력하시오
/*
  * DOM객체
  documnet.querySelector() : 특정 선택자의 html 요소를 js객체로 반환해주는 함수
  document.querySelector('#idName')
  document.querySelector('.cssName')
  document.querySelector('tagName')

  Dom객체.innerHTML = 마크업 사이에 넣을 HTML형식의 문자열
    * <마크업> 여기 </마크업>
    * <div></div>, <ol></ol>, <span></span> 등은 innerHTML 사용가능
    * <input/>, <img/> 등은 innerHTML 사용 불가능


*/

let html = ''; // 1. 데이터 구성
// 2. 데이터를 1부터 5까지 1씩증가하면서 하나씩 누적해 출력
for(let i=1; i<=5; i++){
  html += '★'
  // 3. 누적합계 : 변수 +=값, 변수 = 변수+값
}
// 4. 특정 HTML 마크업의 innerHTML에 변수값을 대입하기.
document.querySelector('#star1').innerHTML = html;

// 2. 복습예제 : 특정 html(star2 div)에 총점 5점 에서 고객평점을 출력하시오.
//    출력형식 : 만약에 고객평점이 3점이면 ★
let 고객평점 = 3;
let html2='';                             // 1. 구성할 html 변수 선언
for(let i=1; i<=5; i++){                  // 2. 1부터 5까지 1씩증가하면서 ☆ 출력
  if( i<=고객평점){html2 +='★'; continue} // 3. 고객평점 만큼은 ★ 출력
  html2 +='☆'
}
document.querySelector('#star2').innerHTML = html2;

// 3. 복습예제 : 특정 html(sheet div)에 좌석배열 상태를 아래와 같이 출력하시오.
/**
  - 빈좌석 : x, 예약된좌석 : o
  - 2개씩 3줄 출력
  - 빈좌석이면 gray 표시, 예약된좌석이면 red 표시
*/

let sheetArray = [ 'o', 'x', 'o', 'x', 'o', 'x'];
let html3='';
for(let i=0; i< sheetArray.length; i++){
  if(sheetArray[i]=='x'){
    html3 += `<div class='grayBox'>빈좌석</div>`
  }
  else{
    html3 += `<div class='redbox'>예약석</div>`
  }
  
}

document.querySelector('#sheet').innerHTML = html3;


