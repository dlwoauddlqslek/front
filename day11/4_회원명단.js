console.log('js실행');
// 1. 함수 선언
//function 등록(){}

// 2. 클릭이벤트가 함수 호출 하는데 확인 작업
//function 등록(){console.log('등록()');}

// 3. 로직(함수안에서 처리할 코드) 작성
const nameList=[]

function 등록(){
  console.log('등록()');

  //[입력] 1. HTML INPUT 에 입력된 값을 가져온다.
  let input=document.querySelector('#name'); console.log(input);
    // html <input/> 을 JS의 객체(코드)로 가져오기
  let name =input.value;                      console.log(name);
    // .value 속성의 입력된 값을 반환한다.
  
  //[처리] 2. 입력받은 값을 배열에 저장한다. *배열내 데이터는 전역
  
 
  if(name.length!=3) {alert('3글자만 입력가능합니다.')}
  else if(nameList.indexOf(name)!=-1){alert('중복된 성명입니다.')}
  else if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){alert('숫자는 입력할 수 없습니다.')}
  else{nameList.push(name); 출력()}
    
  input.value='';
  
}

function 삭제(){ console.log('삭제');
  //1. [입력]
  let name=document.querySelector('#name').value; console.log(name);
  
  //2. [처리]
  let deleteIndex = nameList.indexOf(name);   console.log(deleteIndex);
  
  if(nameList.indexOf(name)==-1){alert('성명이 명단에 없습니다.')}
  else{
  nameList.splice(deleteIndex,1);             console.log(nameList); 


  출력()
  }
  
  
}

function 출력(){
   //[출력] 3. 배열내 데이터를 HTML table에 출력한다.
    //[3-1 어디에]
  let nameTable = document.querySelector('#nameTable');
    //[3-2 무엇을]
  let html=`<tr> <th>번호</th> <th>성명</th> </tr>`
    // 0부터 마지막 인덱스 까지 1씩증가 반복
    for(let i=0; i<nameList.length; i++){
      // 배열내 i번째 회원명을 문자열템플릿 ${}을 이용한 HTML 문자열 대입
      html +=`<tr> <td>${i+1}</td> <td>${nameList[i]}</td> </tr>`
    }
    console.log(html);
    //[3-3 출력]
  nameTable.innerHTML = html
}

