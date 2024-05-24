let boardlist = ['제목입니다,내용입니다,1234,2024-05-24,3','두번째제목,내용,4567,2024-05-25,0']


//1. 등록함수 실행조건: 등록버튼을 클릭했을 때
function create(){
  //1-1
  let title =document.querySelector('#titleinput').value;
  let content= document.querySelector('#contentinput').value;
  let password= document.querySelector('#passwordinput').value;
  

  //2-1 입력받지 않은 데이터를 초기화
  let date = new Date(); console.log(date);
  console.log(date.getFullYear());  //연도만
  console.log(date.getMonth()+1);   //월만(원래 월보다 -1)
  console.log(date.getDate());      //일만
  console.log(date.getHours());     //시
  console.log(date.getMinutes());   //분
  console.log(date.getSeconds());   //초
  let currentyear = date.getFullYear(); 
  let currentmon = date.getMonth()+1 <10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
  let currentday = date.getDate() <10 ? "0"+(date.getDate()) : date.getDate();
  date = `${currentyear}-${currentmon}-${currentday}`
  let view = 0;

  //3. ,쉼표 구분해서 하나의 문자열로 만들자.
  let board = `${title},${content},${password},${date},${view}`; console.log(board);
  //4.
  boardlist.push(board); console.log(boardlist);
  //5. 등록 성공
  alert('등록성공');

  allread();
}



allread();
//2. 전체출력 실행조건: 1. 페이지가 열렸을 때(HTML실행->JS실행) 2. 데이터 변화(수정/삭제/등록)가 있을 때
function allread(){
  let tablebody = document.querySelector('#tablebody')
  

  let html = '';

  for( let i = 0; i<boardlist.length; i++){
    let board = boardlist[i];

    let boardArray = board.split(','); console.log(boardArray);
    console.log(boardArray[0]); console.log(boardArray[3]); console.log(boardArray[4]);
    html +=`<tr><td>${i}</td><td onclick="read(${i})">${boardArray[0]}
    </td><td>${boardArray[3]}</td><td>${boardArray[4]}</td></tr>`
  }

  tablebody.innerHTML = html; 
}
//3. 개별출력 실행조건
function read(index){
  // 선택/클릭 했을 때 클릭된 해당 인덱스를 매개변수를 받아서
  let boardArray = boardlist[index].split(','); // 해당 인덱스의 게시물 정보를, 쉼표 기준으로 분류된 배열 반환
  // 1. 어디에
  let viewpage = document.querySelector('#viewpage')
  // 2. 무엇을
  let html =`<h3> 상세 페이지</h3>
              <div>${boardArray[0]}</div>
              <div>
                <span>조회수: ${boardArray[4]}</span>
                <span>작성일: ${boardArray[3]}</span>
              </div>
              <div>${boardArray[1]}</div>
              <button onclick="update(${index})">수정</button>
              <button onclick="_delete(${index})">삭제</button>`
  // 3. 출력/대입
  viewpage.innerHTML = html;

}
// 4. 수정함수 실행조건: (누구를=인덱스)수정버튼 클릭
function update(index){
  // 배열내 특정 데이터 수정(제목, 내용)
    
  if(password(index)==false) return;
  //1. 해당 게시물 분류
  let board = boardlist[index].split(',')
    // 새로운 제목과 내용 입력
  let utitle = prompt('수정할제목');
  let ucontent = prompt('수정할내용');
    // 수정된 정보로 구성: 새로운 제목과 내용만 수정, 나머지는 기존 데이터 사용
  let uboard = `${utitle},${ucontent},${board[2]},${board[3]},${board[4]}`
    // 선택된 인덱스의 수정할 정보 대입
  boardlist[index]=uboard;
    // 화면 새로고침(재출력: 데이터 변화가 있기 때문)
  allread();
  read(index);
}
// 5. 삭제함수 실행조건: 삭제버튼 클릭
function _delete(index){
  //
  if(password(index)==false) return;

  boardlist.splice(index,1);
  allread();
  document.querySelector('#viewpage').innerHTML='';

}

function password(index){
  let confirmpw = prompt('비밀번호를 입력하세요');
  if(confirmpw != boardlist[index].split(',')[2]){
    alert('패스워드가 다릅니다')
    return false; // 패스워드 불일치, 함수 종료, 이하 아래 코드는 실행이 안됨.
  }
  return true; //패스워드 일치
}



