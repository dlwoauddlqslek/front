let memberList=[];

function findid(){
  let name=document.querySelector('#name').value
  let phone=document.querySelector('#phone').value

  memberList=JSON.parse(localStorage.getItem('memberList'));
  if(memberList==null){memberList=[]};
  console.log(memberList);
  let index=0;
  let find=false;
  for(let i=0; i<memberList.length; i++){
    if(name==memberList[i].name && phone==memberList[i].phone){ index=i; find=true;
    }
  }
  


  if(find==false){return alert('일치하는 아이디가 없습니다.')};
  let findid=document.querySelector('#findid');
  alert('아이디를 찾았습니다')
  findid.innerHTML=memberList[index].id;

  

}

function findpw(){
  let id=document.querySelector('#id').value
  let phone=document.querySelector('#phone2').value

  memberList=JSON.parse(localStorage.getItem('memberList'));
  if(memberList==null){memberList=[]};
  console.log(memberList);
  let index=0;
  let find=false;
  for(let i=0; i<memberList.length; i++){
    if(id==memberList[i].id && phone==memberList[i].phone){ index=i; find=true;
    }
  }

  if(find==false){return alert('비밀번호를 찾을 수 없습니다')};
  let findpw=document.querySelector('#findpw');
  alert('비밀번호를 찾았습니다')
  findpw.innerHTML=memberList[index].pw;

  

}