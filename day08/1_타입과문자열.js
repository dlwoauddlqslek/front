/*
  0. 키워드 : js회사에서 미리 만든 의미/기능 담긴 단어
  
  1. 세미콜론 ;
    - 컴퓨터에게 문장 마침 알림 역할
    - 한줄에 코드문장이 1개일 때 생략 가능.
    - 한줄에 코드문장이 2개 이상일때는 코드문장마다 ; 마침.
  
  2. 데이터 타입
    typeof data   : data 타입/형식을 출력
    - HTML 타입 문자열

  3. 문자열 처리
    1. '',"",``
      -`백틱 문자열 템플릿
        `문자열${js코드}문자열${js코드}
    2. 변수호출 이나 연산은 문자처리 X
  
    4. 문자열은 배열과 같다

*/
// 1.
console.log('사과')
console.log('바나나'); console.log('포도')
// 2.
console.log(typeof'사과');
console.log(typeof 10);
console.log(typeof true);
console.log(typeof [1,2]);
// 3.
console.log('유재석');
console.log('35000');
// console.log('유재석"); '  " 불가능
console.log('유재석"30"');
console.log("유재석'30'");
console.log(`유재석"30"`);
//  4. 
let 나이 = 40;
console.log('유재석'+30);             //문자열+숫자 : 
console.log('유재석'+'강호동');
console.log(`${'유재석'}${'강호동'}`);
console.log(`${'유재석'}${30}`);
console.log('유재석'+나이);
console.log(`유재석${나이}`);
// 4-2
let 직원1 = '유재석';
let 직원2 = '강호동';

let ageHTML1 =`<ol><li>${직원1}</li><li>${직원2}</li></ol>`;
document.write(ageHTML1)
let ageHTML2 ='<ol><li></li><li>강호동</li></ol>';
document.write(ageHTML2)
// 5.
let 차량번호 = '250어7142'
console.log(차량번호[1]);           //5
console.log(차량번호.length);       //8
let 수정번호 = 차량번호.split('어'); //특정 문자 기준으로 분리해서 배열 반환
console.log(수정번호);

// 예1 > 2명의 사원정보의 이름을 입력받아 HTML(table)형식 출력
let 사원1 = prompt('사원1 사원명:');
let 사원2 = prompt('사원2 사원명:');

let tableHTML = `<table>
                  <tr>
                    <th>번호</th> <th>이름</th>
                  </tr>
                  <tr>
                    <td>1</td><td>${사원1}</td>
                  </tr>
                  <tr>
                    <td>2</td><td>${사원2}</td>
                  </tr>
                
                  </table>
`
document.write(tableHTML)
