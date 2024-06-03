/*

  -회원가입 페이지
  1. 회원정보: 회원번호, 아이디, 비밀번호, 이름, 연락처
  2. 입력사항: 아이디, 비밀번호, 비밀번호 확인, 이름, 연락처
  3. 유효성검사: 
    1. 아이디와 비밀번호는 5글자 이상만 가능
    2. 이름은 3글이상만
    3. 연락처는 -8자리 이상만 가능
    4. 비밀번호와 비밀번호확인 일치 했을때만 가능
    5. 아이디와 연락처는 중복 제외


*/

let memberList=[];



function signup(){
  memberList=JSON.parse(localStorage.getItem('memberList'));
  if(memberList==null){memberList=[]};
  
  // 1.html에서 입력받은 데이터 가져오기
  let id=document.querySelector('#id').value
  let pw=document.querySelector('#pw').value
  let pwcheck=document.querySelector('#pwcheck').value
  let name=document.querySelector('#name').value
  let phone=document.querySelector('#phone').value
  console.log(pw.length);
  if(id.length <5){return alert('아이디는 5글자 이상이어야 합니다') }
  if(pw.length <5){return alert('비밀번호는 5글자 이상이어야 합니다') }
  if(name.length<3){return alert('이름은 3글자 이상이어야 합니다')}
  if(phone.length <8 || isNaN(phone)){return alert('연락처는 - 제외한 8자리 이상의 숫자이어야 합니다') }
  if(pw!=pwcheck){return alert('두 비밀번호가 일치하지 않습니다')}

  for(let i=0; i<memberList.length; i++){
    if(memberList[i].id==id){return alert('사용중인 아이디 입니다')}
  }
  for(let member of memberList){
    if(member.phone==phone){return alert('중복된 핸드폰 번호입니다')}
  }

 

  let no=memberList.length==0? 1: memberList[memberList.length-1].no+1;
  let member={
    no : no, id:id, pw:pw, name:name, phone:phone
  }; console.log(member);
  memberList.push(member);
  

  localStorage.setItem('memberList',JSON.stringify(memberList));
  
  // 결과 안내 후 페이지 전환, location.href="이동할경로"
  alert('회원가입 성공'); location.href='login.html'

}