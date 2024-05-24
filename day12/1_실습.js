/* 
  1. 메모리 구성
    1. 여러 아이디, 비밀번호를 저장하는 저장소 필요
    let idlist=[]
    let passwordlist=[]

  2. 기능/서비스 구성
    1. 회원가입 처리 ==함수
      signup
      [로직 순서도]
        1. 아이디/비밀번호 입력
        2. 입력받은 데이터를 각 배열에 저장
        3. 안내 메시지
    2. 로그인 처리 == 함수
      login
      [로직 순서도]
        1. 아이디/비밀번호 입력받는다.
        2. 입력받은 데이터를 각 배열내 존재하는지 비교한다.
        3. 안내 메시지
    3. 함수 구현
    
*/



let idlist=[];
let passwordlist=[];
// 2. 함수구성
function signup(){    console.log('signup()');
  // 2-1
  let signupid = document.querySelector('#signupid'); 
  let signuppw = document.querySelector('#signuppw'); 
  // 2-2
  let id = signupid.value;                        console.log(id);
  let pw = signuppw.value;                         console.log(pw);
  // 2-3
  idlist.push(id);                              console.log(idlist);
  passwordlist.push(pw);                        console.log(passwordlist);
  // 2-4
  alert('회원가입 성공');
}


function login(){
  let loginid = document.querySelector('#loginid')
  let loginpw = document.querySelector('#loginpw')

  let id = loginid.value;
  let pw = loginpw.value;
  let index=idlist.indexOf(id); console.log(index);
    if(index !=-1){
      if(passwordlist[index]==pw){alert('로그인 성공')}
      else{alert('비밀번호가 일치하지 않습니다.')};
      
    }
    else{alert('존재하지 않는 ID입니다.')};
    
}