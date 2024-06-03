/*

  내정보 페이지
    1. 현재 로그인된 회원 번호, 아이디, 이름, 연락처
    2. 회원탈퇴 버튼 클릭하면 confirm 함수 활용해서 확인 선택지 탈퇴처리
    * 로그인된 회원번호 세션 저장소 사용
    * 탈퇴시 로그아웃 처리

*/
let memberList=[];
info();
function info(){
  // 세션스토리지에 현재 로그인된 회원번호 가져오기
let loginNo=sessionStorage.getItem('loginNo');
if(loginNo==null){
  alert('로그인후 가능한 페이지입니다.');
  location.href='login.html'
}
  // 현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원번호의 회원객체 찾기
    // 로컬스토리지에 있는 회원목록 호출

memberList=JSON.parse(localStorage.getItem('memberList'));
if(memberList==null){memberList=[]};

let no=document.querySelector('#no');
let id=document.querySelector('#id');
let name=document.querySelector('#name');
let phone=document.querySelector('#phone');

for(let i=0; i<memberList.length; i++){
  if(loginNo==memberList[i].no){ 
    no.innerHTML=memberList[i].no
    id.innerHTML=memberList[i].id
    name.innerHTML=memberList[i].name
    phone.innerHTML=memberList[i].phone
    return;  }

    
}
}

function cancel(){console.log('cancel()');
  // 탈퇴 하는지 확인받기, 확인 true, 취소 false
  let msg=confirm('정말 탈퇴를 원하시나요?'); console.log(msg);
  if(msg==false){return;}
  
  // 확인 했을 때
    // 누구를(현재 로그인된 회원)
  let loginNo=sessionStorage.getItem('loginNo');
    // 해당 loginNo의 회원객체 찾기
      // 회원목록내 에서 로그인된 회원번호와 동일한 회원 찾기
  for(i=0; i<memberList.length; i++){
      // 만약에 회원목록내 i번째 회원객체내 번호와 로그인된 회원번호와 같으면
    if(memberList[i].no==loginNo){
      // 찾은 i번째 인덱스의 회원객체를 회원목록에서 제거
      memberList.splice(i,1);
      // 회원목록의 변화가 있기에 로컬스토리지에 적용하기 위해 setitem 사용
      localStorage.setItem('memberList',JSON.stringify(memberList));
      // 한번 실행후 for문 탈출
      alert('탈퇴되었습니다'); break;
    }
  }
  logout(); // index.js 에서 정의한 logout() 함수 호출
}

// 수정페이지로 이동
function update(){
  location.href='update.html';
}