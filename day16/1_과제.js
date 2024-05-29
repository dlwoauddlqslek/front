let member=[];
let a=1;
function signup(){
  let signupid = document.querySelector('#signupid').value
  let signuppw = document.querySelector('#signuppw').value
  mem = {mno: a++, id: signupid, pw: signuppw};
  member.push(mem)
  console.log(member);
  alert('회원가입 성공');
}

function login(){
  let loginid = document.querySelector('#loginid').value; console.log(loginid);
  let loginpw = document.querySelector('#loginpw').value; console.log(loginpw);
  for(i=0; i<=member.length; i++){
    if(loginid==member[i].id){
      if(loginpw==member[i].pw){
        return alert('로그인성공')
      }
      else{return alert('비밀번호 불일치')}
    }
    else{return alert('없는 id')}
    }    
    
    
    
      
  }

