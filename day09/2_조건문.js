/*
  - 문제조건 : 입력 prompt 함수 , 출력 console 함수 사용 
  - 문제
  - 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
  - 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
  - 3. 3개의 정수를 각 입력받아 더 큰수를 출력 하시오.
  - 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 
  - 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
  - 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
  - 7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
      하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
        아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
  - 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.
  - 9. 가위바위보 게임 
     조건1 : 가위 0 , 바위 1 , 보 2 입니다.
     조건2 : 플레이어 2 명 입니다.
     실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
     출력조건 : 
        플레이어1 이겼을때 '플레이어1 승리' 출력 
        플레이어2 이겼을때 '플레이어2 승리' 출력 
        비겼을경우 '무승부' 출력 
  - 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
    빈좌석 : 'X'  사용중인좌석 : 'O'
*/

/* 1번
let 점수1 = prompt('점수를입력하세요')*1;
let 점수2 = prompt('점수를입력하세요')*1;
let 점수3 = prompt('점수를입력하세요')*1;
let total = 점수1+점수2+점수3;      console.log(total);
if(total>=90){console.log('성공');}
else{console.log('실패');};
*/

/* 2번
let 정수1 = prompt('정수를 입력하세요')*1;
let 정수2 = prompt('정수를 입력하세요')*1;
if(정수1>정수2){console.log(정수1);}
else{console.log(정수2);};
*/

/* 
let 정수1 = prompt('정수를 입력하세요')*1;
let 정수2 = prompt('정수를 입력하세요')*1;
let 정수3 = prompt('정수를 입력하세요')*1;
if(정수1>정수2)
  {if(정수1>정수3){console.log(정수1)}}

else if(정수2>정수3){console.log(정수2);}
else{console.log(정수3);};
*/
/*
let score = [];
score[0] = +prompt("정수1 입력");
score[1] = +prompt("정수2 입력");
score[2] = +prompt("정수3 입력");
let largestNum = score[0];
// if문을 각각 사용해 모든 경우 검사 
if (largestNum < score[1]) { largestNum = score[1]; }
if (largestNum < score[2]) { largestNum = score[2]; }
console.log(largestNum);
*/
/*
let 정수1 = prompt('정수를 입력하세요')*1;
let 정수2 = prompt('정수를 입력하세요')*1;
let 정수3 = prompt('정수를 입력하세요')*1;
if(정수1>정수2)
  {if(정수2>정수3){console.log(정수1,정수2,정수3)}
    else{console.log(정수1,정수3,정수2);}
}

else if(정수2>정수3){
  if(정수3>정수1){console.log(정수2,정수3,정수1);}
    else{console.log(정수2,정수1,정수3);}
}
else{
  if(정수1>정수2){console.log(정수3,정수1,정수2);}
    else{console.log(정수3,정수2,정수1);}
};
*/
/* 
  [교환/SWAP]
    - 변수들 간의 값 교환 (변수는 1개의 값만 저장한다.)
    A = B , A에 B를 대입하면 기존의 A의 값은 사라짐.
    [중개자/임시변수 필요]
  temp = A
  A = B
  B = temp
    1. A = 7  B = 5
    2. temp = A(7)    A = 7 , B = 5 , TEMP = 7
    3. A = B(5)       A = 5 , B = 5 , TEMP = 7
    4. B = temp(7)    A = 5 , B = 7 , TEMP = 7

*/
/*
let a = prompt('정수를 입력하세요')*1;
let b = prompt('정수를 입력하세요')*1;
let c = prompt('정수를 입력하세요')*1;

if(a>b){
  let temp=a;
  a = b;
  b = temp;
} //a 20 b 30 c 10
if(a>c){
  let temp=a;
  a = c;
  c = temp;
} // a 10 b 30 c 20
if(b>c){
  let temp=b;
  b = c;
  c = temp;
} // a 10 b 20 c 30
console.log(`오름차순: ${a} ${b} ${c}`);
*/
/*
let 점수 = prompt('점수를 입력하세요')*1;
if(점수>=90){console.log('A등급');}
else if(점수>=80){console.log('B등급');}
else if(점수>=70){console.log('C등급');}
else{console.log('재시험');};
*/
/*
let id = prompt('아이디:');
let pass = prompt('비밀번호:');
if(id=='admin' && pass=='1234'){console.log('로그인 성공');}
else{console.log('로그인 실패');};
*/
/*
let fruitList = ['바나나', '사과'];
let fruit = prompt('과일명');

if(fruitList.indexOf(fruit)>=0){console.log('이미 존재하는 과일입니다.');}
else{fruitList.push(fruit); console.log(fruitList);};
*/
/*
let number = prompt('주민등록번호');
let color = '';
if(number[7] == 1 || number[7] ==3){color='blue'}
else if(number[7] == 2 || number[7] == 4){color='red'}
else{color='black'};
console.log(color);
let html = `<h3 style='color : ${ color}'> 주민등록번호 : ${number} </h3>`;
console.log(html);
document.querySelector('#result1').innerHTML = html;
*/
/*
let p1 = prompt('가위[0] 바위[1] 보[2] : ')
let p2 = prompt('가위[0] 바위[1] 보[2] : ')

if((p1==0 && p2==2) || (p1==1 && p2==0) || (p1==2 && p2==1)){
  console.log('p1 win');
}
else if((p1==0 && p2==0) || (p1==1 && p2==1) || (p1==2 && p2==2)){
  console.log('draw');
}
else{console.log('p2 win');};

let answer = p1==p2 ? 'draw' : p1 == (p2+1)%3 ?  'p1 win'  : 'p2 win';
console.log((p2+1)%3);
console.log(p1 == (p2+1)%3);
console.log(answer);
*/
let sheetList = ['O' , 'X' , 'O'];
let number = prompt('좌석1, 좌석2, 좌석3 : ');
if(sheetList[number-1]=='O'){console.log('예약불가');}
else if(sheetList[number-1]=='X'){console.log('예약성공');sheetList[number-1]='O'}
console.log(sheetList);














