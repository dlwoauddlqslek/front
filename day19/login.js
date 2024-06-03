/* 
  
  로그인 페이지
    1. 아이디와 비밀번호 입력받아 기존 회원 목록에 일치한 정보 찾기
    2. 로그인 성공시
      - 결과 안내
      - 세션저장소 로그인 성공 여부(회원번호) 저장하기
      - 메인으로 이동
    3. 로그인 실패시
      - 결과 안내
    

*/
  let memberList=[];

function login(){ console.log('login()');
  memberList=JSON.parse(localStorage.getItem('memberList'))
  if(memberList==null){memberList=[];}

  let id=document.querySelector('#id').value
  let pw=document.querySelector('#pw').value
  for(i=0; i<memberList.length; i++){
  if(id==memberList[i].id && pw==memberList[i].pw){
    alert('로그인성공'); 
    // 로그인 성공시 세션 스토리지에 회원 번호 저장
    sessionStorage.setItem('loginNo',memberList[i].no)
    location.href='index.html'; return;
  }
}
  alert('로그인실패')
}
