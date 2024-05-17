/*

  연산자 : 연산시 사용되는 기호
  1. 산술연산자
    + 더하기 - 빼기 * 곱하기 / 나누기 % 나머지
    몫 : parseInt() : 정수 반환 함수

  2. 연결연산자
    - 피연산자가 문자이면 포함되면 연결 연산자로 적용
    - 문자 + (숫자1+숫자2)

  3. 비교연산자
    > 초과/크다     >= 이상/크거나같다
    < 미만/작다     <= 이하/작거나같다
    ==[값]같다      ===[값과타입]같다
    1=같지않다      !==같지않다

  4. 관계연산자 : 비교연산자 2개이상일때
    && and
      true && true -> true
      true && false -> false
    || or
      true || true -> true
      true || false -> true
    ! 부정 반대 not 조건
      !true -> false
      !false -> true 

  5. 대입연산자
    = 대입 (오른쪽 데이터를 왼쪽에 대입)
    += (오른쪽 데이터를 왼쪽 데이터와 계산(+) 결과를 왼쪽에 대입)
    -=, *=, /=, %=

  6. 증감연산자
    ++ 1증가 [ 선위증가: ++변수, 후위증가: 변수++]
    -- 1감소 [ 선위감소: --변수, 후위감소: 변수--]
      * 선위/후위 기준 : ;세미콜론 안에서 우선순위

  7. 삼항연산자
    1. 조건 ? 참 : 거짓
    2. 조건1 ? 참1 : 조건2 ? : 참2 : 거짓
 */
/*
console.log(10+3);
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3);
console.log(parseInt(10/3));
console.log('연산결과 :'+10+10);
console.log('연산결과 :'+(10+10));
*/
/* prompt 함수의 주의할 점 : 모든 입력된 값은 문자이다.
    문자 -> 숫자
    1. '10'*1 ->10
    2. Number('10') ->10

    숫자 -> 문자
    1. 10+'' ->'10'
    2. String(10) ->'10'
 
 
 */


/*
let 국어 = prompt('국어점수')*1;
let 영어 = prompt('영어점수')*1;
let 수학 = prompt('수학점수')*1;
let 총점 = 국어+영어+수학;
let 평균 = 총점/3;
console.log(`총점 : ${총점}`);
console.log(`평균 : ${평균}`);
*/
/*
let 반지름 = prompt('반지름:');
let 넓이 = 반지름*반지름*3.14;
console.log(`원넓이: ${넓이}`);
*/
/*
let 실수1 = prompt('실수1:');
let 실수2 = prompt('실수2:');
let 비율 = (실수1/실수2)*100;
console.log(`비율: ${비율}%`);
*/
/*
console.log(10>3); //true
console.log(10>=3);//true
console.log(10<3);//false
console.log(10<=3);//false
console.log(10==10);//true
console.log(10==="10");//강력비교 false
console.log(10!=3);//true
console.log(10!==3);//true

console.log(10>3 && 20>10);//true
console.log(10>3 && 20>30);//false
console.log(10>3 || 20>10);//true
console.log(10>3||20>30);//true
console.log(!(10>3));//false
*/
/*
let 정수 = prompt('정수입력')
let 홀짝 = 정수%2==1
console.log(`결과: ${홀짝}`);
*/
/*
let 정수 = prompt('정수입력')
let 배수 = 정수%7==0
console.log(`결과: ${배수}`);
*/
/*
let id = prompt('아이디:')
let pass = prompt('비밀번호:')
let 일치 = id=='admin' && pass=='1234'
console.log(`결과: ${일치}`);
*/
/*
let 정수 = prompt('정수입력');
let 홀수배수 = 정수%2==1 && 정수%7==0;
console.log(`결과: ${홀수배수}`);
*/
/*
let 지폐 = prompt('금액')

let 십만원 = parseInt(지폐/100000);

지폐 = 지폐-십만원*100000;

let 만원 = parseInt(지폐/10000);

지폐 = 지폐-만원*10000;

let 천원 = parseInt(지폐/1000);

console.log(`십만원: ${십만원}장 만원: ${만원}장 천원: ${천원}장`);
*/
/*
// 대입연산자
let 변수 = 10;
변수 = 변수+3;
              // 변수 = 10+3;
              // 변수 = 13;
              // 변수(13)
변수 +=3;     // 오른쪽 값을 왼쪽값과 더한 후 결과를 왼쪽에 대입
변수 -=3;
변수 *=2;

// 증감연산자
let 나이 = 40;
console.log(나이++); // 40 1.변수호출 -> 2.출력 -> 3.1증가
console.log(나이);   // 41
console.log(++나이); // 42 1.변수호출 -> 2.1증가 -> 3.출력

console.log( 나이--);// 42
console.log(나이);   // 41  
console.log(++나이); // 42

// 삼항연산자
let 점수 =75;
console.log(점수>80); //false
console.log(점수>=80 ? '합격' : '불합격'); //불합격

let age = 39;
console.log(age>=19); //true
console.log(age>=19 ? '성인':'청소년'); //성인
console.log(age>=40 ? '중년':age>=19 ? '성인':'청소년');//성인
*/

let 점수 = prompt('점수입력');
console.log(점수>=80 ? '합격' : '불합격');


