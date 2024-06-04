/* 

  C(저장): 회원가입           글쓰기                  제품등록      주문등록
    메모리 저장     배열명.push()
                   .setItem('key', value)
  R(호출): 로그인, 내정보      전체글출력, 개별글출력   제품출력      주문출력
    메모리 호출     전체호출: for문, 개별호출: 배열명[]
                   .getItem('key')
  U(수정): 회원수정           글수정                  제품수정      주문수정
    메모리 수정     배열명[].속성명=새로운값

  D(삭제): 회원탈퇴           글삭제                   제품삭제      주문삭제
    메모리 삭제     배열명.splice(인덱스,1);

*/

let loginNo=sessionStorage.getItem('loginNo');
if(loginNo==null){alert('로그인 후 사용 가능합니다'); location.href='login.html'}
let boardList=[];

function _write(){console.log('wite()');
  boardList=JSON.parse(localStorage.getItem('boardList'));
  if(boardList==null){boardList=[]};

  
  //1. HTML 입력된 데이터 가져오기
  let title=document.querySelector('#title').value
  let content=document.querySelector('#content').value
  //2. 유효성검사
  //3. 데이터 가공
  let writer=''; // 로그인 회원의 아이디를 찾아서 넣을 변수 준비

  let memberList=[]; // 로컬스토리지에 있는 회원 목록 호출
  memberList=JSON.parse(localStorage.getItem('memberList'));
  if(memberList==null){memberList=[]};
  // 회원목록에서 로그인된 회원번호와 같은 객체 찾기
  for(let i=0; i<memberList.length; i++){
    if(memberList[i].no==loginNo){
      writer=memberList[i].id;  // 찾은 객체의 아이디를 writer변수에 대입
      break;  }
  }

  let board={
    no: boardList.length==0 ? 1: boardList[boardList.length-1].no+1
    , title: title, content: content, writer: writer, date: new Date(), view: 1
  }; console.log(board);
  //4. 저장
  boardList.push(board); console.log(boardList);
  localStorage.setItem('boardList', JSON.stringify(boardList));
  //5. 안내후 이후 처리
  alert('글쓰기 성공');
  location.href="board.html"; 
}

