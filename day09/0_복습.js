/*복습예제1 : 1차점수 , 2차점수 입력받아 총점이 150점이상이면 '성공' 아니면 '실패'
              HTML의 <h3> 에 출력하시오.
*/

// 1. 입력받은 데이터를 변수에 저장
/*let point1 = prompt( '1차점수')*1;
let point2 = prompt( '2차점수')*1;
// 2. 연산
let total = point1 + point2 ;           console.log(total);
// 3. 논리조건
let msg = total >= 150 ? '성공' : '실패'; console.log(msg);
// 4. 문자열 템플릿
let html = `결과 : ${msg}`;               console.log(html);
// 5. HTML 출력
let result1 = document.querySelector('#result1'); console.log(result1);

result1.innerHTML = html
*/


  // document : 문서 , HTML 뜻한다
  // query(질의)Selector(선택자)
    // CSS선택자 동일 : 1.마크업 2. .class 3. #id
  // innerHTML : <마크업> inner </마크업> , 마크업 안에 HTML형식의 문자열


  let name1 = prompt('이름을 입력하세요');
  let name2 = prompt('이름을입력하세요');

  name1 = name1=='유재석' ? name1+'(방장)' : name1;   console.log(name1);  
  name2 = name2=='유재석' ? name2+'(방장)' : name2;   console.log(name2);

  let html2 = `<li>${name1}</li>    
               <li>${name2}</li>            
              `                   
  console.log(html2);
            
  let result2 = document.querySelector('#result2');

  result2.innerHTML = html2;