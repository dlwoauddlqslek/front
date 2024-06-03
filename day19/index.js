// 1. 로그인 상태에 따라 헤더메뉴를 구성하기
loginState();
function loginState(){
  // 세션저장소에 저장된 로그인회원번호 호출
  let loginNo= sessionStorage.getItem('loginNo')
    // 로그인회원번호 존재X일 때 0
  if(loginNo==null){loginNo=0}
  let nav=document.querySelector('.navbar-nav')
  let html=''; 
  // 로그인회원번호 존재시
  if(loginNo!=0){
    // 1.어디에
      
    // 2.무엇을
      html+=`<li class="nav-item"><a class="nav-link" href="info.html">내정보</a></li>
            <li class="nav-item"><a class="nav-link" href="#" onclick="logout()">로그아웃</a></li>`;
    // 3. 출력
      console.log(html);
  }else{//비로그인시}
    html+=`<li class="nav-item"><a class="nav-link" href="signup.html">회원가입</a></li>
          <li class="nav-item"><a class="nav-link" href="login.html">로그인</a></li>`;
  console.log(html);
}
nav.innerHTML+=html;
}

//2. 로그아웃 함수: 실행조건: 로그아웃 버튼 클릭했을 때
function logout(){console.log('logout()')
  //1. 세션저장소의 로그인회원 정보를 제거하기
  sessionStorage.removeItem('loginNo'); // sessionStorage.removeItem('key'): 해당 key값 제거
  //2. 안내후 메인페이지로 이동
  alert('로그아웃 되었습니다.'); location.href="index.html";
}