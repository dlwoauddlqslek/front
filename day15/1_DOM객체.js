/* 
  document: HTML 전체요소
  document.querySelector('선택자'): 요소 1개를 객체로 반환
  documnet.querySelector('선택자'): 요소 여러개를 객체 배열로 반환
  - 선택자: CSS동일
    1. 마크업 2. 클래스명 3. id명 4. 자식 자손

  - 요소 조작 속성/함수
    .innerHTML 속성
      - 사용가능 요소: <div>, <table> 등등 <>열고 </>닫는 마크업
      - 사용불가능 요소: <input/>, <img/>, <br/> 등등
      <호출> document.querySelector('선택자').innerHTML
      <수정> document.querySelector('선택자').innerHTML = 데이터

    .value 속성
      - 사용가능 요소: input, select, textarea 등등
      - 사용불가능 요소: div, table 등등
      <호출> document.querySelector('선택자').value
      <수정> document.querySelector('선택자').value = HTML형식의 문자열데이터

    .src 속성
      - 사용가능 요소: img, audio, video
      <호출> document.querySelector('선택자').src
      <수정> document.querySelector('선택자').src='파일경로

    .style 속성
      <전체호출> document.querySelector('선택자').style
      <전체수정> document.querySelector('선택자').style ='css속성코드';
      <일부호출> document.querySelector('선택자').style.css속성명
      <일부수정> document.querySelector('선택자').style.css속성명='속성값'

      *css속성명 작성시 카멜표기법
        1. background-color -> backgroundColor
        2. margin-left -> marginLeft



*/







// 1. DOM객체 확인
console.log(document); // 현재 실행된 HTML 뜻
console.log(document.body);
console.log(document.querySelector('body'));

// 2. documnet.querySelector('선택자')
  // 마크업선택자: '마크업명'
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
  // 클래스선택자: '.클래스명'
console.log(document.querySelector('.box2'));
  // 아이디선택자: '#아이디명'
console.log(document.querySelector('#box3'));
  // 자식, 자손선택자
console.log(document.querySelector('body>div'));

// 3. 선택된 요소(마크업)를 저장
let box3 = document.querySelector('#box3');
console.log(box3);

// 4. innerHTML : 문서의 요소 필요
console.log(document.querySelector('.box2').innerHTML);
document.querySelector('.box2').innerHTML = 'box2'

// 5. value: 
console.log(document.querySelector('input').value);
document.querySelector('input').value="강호동";

let select = document.querySelector('select');
console.log(select.value);  // 첫번째 목록이 기본값이므로 '바나나'

select.value='수박' // 목록을 '수박'으로 수정/대입

document.querySelector('textarea').value;
console.log(document.querySelector('textarea').value);
document.querySelector('textarea').value='긴글텍스트';

// 6. src
//document.querySelector('img').src='../2304261621443180.jpg'

// 7. style
  // 전체 스타일
console.log(document.querySelector('#box4').style);
document.querySelector('#box4').style='color:white; background-color:blue;'
  // 일부분 스타일: css속성명을 작성할 때 '-' 사용 X
    // -카멜 표기법: 낙타 등 모양처럼
    // carspeed -> carSpeed, background-color -> backgroundColor
console.log(document.querySelector('#box4').style.backgroundColor);
document.querySelector('#box4').style.backgroundColor='red';
