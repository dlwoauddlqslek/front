/* 
  실습2: 웹 가계부 만들기
    [요구사항]
    1. 항목마다 날짜, 항목명, 금액 3가지를 저장
    2. 등록된 금액의 총합계를 하단에 표시
    3. 출력은 table 
    추가사항
    - 테이블에 항복 내역을 아래와 같이 출력 해주세요
    날짜         항목            금액

    - 내역에서 특정 항목 삭제하는 버튼

    - 금액의 천단위 마다 , 처리
        toLocaleString()
    
    (설계)
    [백엔드]
    1. 메모리 구성
      let datelist=[]
      let namelist=[]
      let moneylist=[]

    2. 기능 구성
      add(){} 1. 입력/저장 함수
      total(){} 2. 총합계 함수

    3. 기능 구현
      1. 입력/저장 함수
        [로직 순서] 1. 입력받고 2. 배열저장 3. 안내
      2. 총합계 함수
        [로직 순서] 1. 배열에 있는 금액들을 가져와 모두 더함
                   2. 총합계를 반환
    [프론트엔드]
    1. HTML 구성
      <input/> 
      <table>
    2. HTML 구현
*/
let datelist=[];
let namelist=[];
let moneylist=[];

function add(){
  let adddate = document.querySelector('#date');
  let addname = document.querySelector('#name');
  let addmoney = document.querySelector('#money');

  let date =adddate.value;
  let name =addname.value;
  let money =addmoney.value;

  datelist.push(date);
  namelist.push(name);
  moneylist.push(Number(money));

  alert('입력이 완료되었습니다.')
  print()
};

function total(){
  let sum=0;
  for(i=0; i<moneylist.length; i++){
    sum+=moneylist[i];
  }
  // 호출 했던 곳으로 데이터 보내주기=반환
  return sum;
 
};


function print(){
  let moneytable = document.querySelector('#moneytable');
  let html = ``;
  html+=`<tr>
          <th>날짜</th>
          <th>항목</th>
          <th>금액</th>
          <th>비고</th>
        </tr>`
  for(i=0; i<namelist.length; i++){
   let currentmoney = moneylist[i];
   let currentname = namelist[i];
   let currentdate = datelist[i];
   
   html+=`<tr>
            <td>${currentdate}</td>
            <td>${currentname}</td>
            <td>${currentmoney.toLocaleString()}</td>
            <td><button onclick="remove(${i})">삭제</button></td>
          </tr>`
  }
  

  html+=`<tr>
          <td colspan="2">합계</td>
          <td colspan="2">${total().toLocaleString()}</td>
        </tr>`
  moneytable.innerHTML = html; console.log(html);
}

// 삭제: 인덱스를 이용한 삭제 구현
function remove(deleteindex){

  // -
  //let deleteindex = 0;

  // 1. 배열 내 특정 인덱스 요소 삭제
  datelist.splice(deleteindex,1);
  namelist.splice(deleteindex,1);
  moneylist.splice(deleteindex,1);

  // 2. 삭제가 되면 배열의 상태가 변경되므로
  // 배열 상태를 다시 출력 - 화면 업데이트
  print();
}

