/* 
  - 
  1. 제품: {제품번호: , 제품명: , 가격: }
  2. 주문: {주문번호: , 주문시간: , 제품번호: }



*/
let 제품목록 = [
  {제품번호: 1, 제품명: '코카콜라', 가격: 1000},
  {제품번호: 2, 제품명: '사이다', 가격: 2500},
  {제품번호: 3, 제품명: '아메리카노', 가격: 1800}
]

// 1.제품 등록 함수: 1.등록 버튼을 클릭했을때
function 제품등록(){
  //===================localStorage 호출
  데이터최신화(2)
  // 1. 입력받은 값을 가져온다.
  let 제품명=document.querySelector('#제품명').value
  let 가격=document.querySelector('#가격').value
  // 2. 데이터를 가공(객체화)
  let 제품번호=제품목록.length!=0 ? 제품목록[제품목록.length-1].제품번호+1:1;
  
  let 제품={제품번호: 제품번호, 제품명: 제품명, 가격: 가격}
  // 3. [유효성검사]
  // 4. 가공도니 데이터(객체)를 저장(배열)한다.
  제품목록.push(제품); console.log(제품목록);
  alert('제품등록 성공');

  //===================localStorage 저장
  데이터최신화(1); console.log(JSON.parse(localStorage.getItem('productlist')));
  제품출력();
}


// 2.제품 출력 함수: 1. JS가 열렸을 때 2. 제품 등록/수정/삭제 있을때
제품출력();
function 제품출력(){ console.log('제품출력()');

  //====================localStorage 호출
  데이터최신화(2)
  // 1.어디에
  let 제품출력구역=document.querySelector('#제품출력구역');
  // 2.무엇을
  let html=''

  for(let i=0; i<제품목록.length; i++){
    html+=`<tr>
            <td>${제품목록[i].제품번호}</td>
            <td>${제품목록[i].제품명}</td>
            <td>${제품목록[i].가격}</td>
            <td><button onclick="주문등록(${제품목록[i].제품번호})">주문</button></td>  
          </tr>`
  };

  // 3.대입
  제품출력구역.innerHTML=html;
}

let 주문목록=[
  {주문번호:1, 주문일: '2024-05-31 10:50', 제품번호:2},
  {주문번호:2, 주문일: '2024-05-31 10:53', 제품번호:2}
]

// 3. 주문: 1. 주문 버튼을 클릭했을때
function 주문등록(제품번호){ console.log('주문등록()'+제품번호);

  //====================localStorage 호출
  데이터최신화(4)
  
  // 1.
  // 2. 데이터 가공(객체화: )
  let 주문번호=주문목록.length!=0 ?주문목록[주문목록.length-1].주문번호+1 :1;
  let date=new Date();
  let 주문일자= `${date.getFullYear()}-${자릿수변환(date.getMonth()+1)}-${자릿수변환(date.getDate())} ${자릿수변환(date.getHours())}:${자릿수변환(date.getMinutes())}`
  let 주문={주문번호: 주문번호, 주문일:주문일자, 제품번호: 제품번호};
  주문목록.push(주문);
   console.log(주문목록);

  //====================localStorage 저장
  데이터최신화(3)
  주문출력();
}

// *날짜/숫자 2자리 변환 함수
function 자릿수변환(변환할값){
  // 만약에 월/일/시/분 (매개변수)가 10보다 작으면 앞에 '0' 연결하기
  if(변환할값<10){변환할값='0'+변환할값;}
  return 변환할값;
}

주문출력();
function 주문출력(){

  //====================localStorage 호출
  데이터최신화(4)
  let 주문출력 = document.querySelector('#주문출력')
  let html=''
  for(let i=0; i<주문목록.length; i++){
    
    html+=`<tr>
            <td>${주문목록[i].주문번호}</td>
            <td>${제품조회(주문목록[i].제품번호).제품명}</td>
            <td>${제품조회(주문목록[i].제품번호).가격.toLocaleString()}</td>
            <td>${주문목록[i].주문일}</td>
          </tr>`
  }
  주문출력.innerHTML=html;
}

// * 제품번호를 매개변수로 전달받고 해당 제품번호(매개변수)의
//   제품객체(정보:제품명,가격)를 찾아서 반환 해주는 함수

function 제품조회(제품번호){
  // 1. 매개변수로 찾을 제품의 제품번호를 받는다.
  // 2. 해당 제품번호를 찾는다, 제품목록에서 하나씩 순회하면서 동일한 제품번호 찾기
  for(let i=0; i<제품목록.length; i++){
    
    // 3. 만약에 제품번호(매개변수) 와 제품목록내 i번째 제품의 번호와 같으면
    if(제품번호==제품목록[i].제품번호){
      let 찾은제품 = 제품목록[i]; // i번째 객체를 호출
      return 찾은제품; // 찾았으면 함수 종료하고 찾은 객체를 호출했던 곳으로 반환
    }
  }
}


// 자동주문 실행조건: 자동주문을 클릭했을때
function 자동주문(){ console.log('자동주문()');
  // 주문할 제품번호를 난수 생성( 현재 제품목록에 존재하는 제품번호만)

  setInterval(()=>{
    let 끝제품번호=제품목록[제품목록.length-1].제품번호;
    let 제품번호=parseInt((Math.random()*끝제품번호)+1);
    주문등록(제품번호);},3000)

}

// localStorage(): JS메모리가 아닌 브라우저(크롬)프로그램 메모리에 저장
// .setItem( key, value) / getItem(key)
// setItem
function 데이터최신화(처리번호){
  //=================제품목록
  
  
  // 1. 저장 localStorage.setItem(key, value);
  if(처리번호==1){
  localStorage.setItem('productList',JSON.stringify((제품목록)));
  }else if(처리번호==2){ 
  // 2. 호출 localStorage.getItem(key);
  제품목록=JSON.parse(localStorage.getItem('productList'));
  if(제품목록==null){제품목록=[]};
  

  
  }else if(처리번호==3){
  //=================주문목록
  
  // 1.
  localStorage.setItem('order',JSON.stringify((주문목록)));
  }else if(처리번호==4){
  
  // 2.
  주문목록=JSON.parse(localStorage.getItem('order'));
  if(주문목록==null){주문목록=[]};
  }else{
    alert('데이터 최신화 오류');
  }
  
  
  

}


// 6-1: 제품목록 브라우저(프로그램)의 localStorage 저장
// 6-2: 제품목록 브라우저(프로그램)의 localStorage 호출
// 6-3: 주문목록 브라우저(프로그램)의 localStorage 저장
// 6-4: 주문목록 브라우저(프로그램)의 localStorage 호출