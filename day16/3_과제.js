// 1. new Date() : 현재 날짜/시간 객체 반환
console.log(new Date());
// 2. 현재 연도
console.log(new Date().getFullYear());
console.log(new Date().getMonth()+1);
// 4. new Date(연도, 월, 일) : 사용자 정의 날짜 객체 반환
console.log(new Date(2023,4,29));
// 5. new Date(연도, 월, 0) : 특정 정의 날짜의 말일
console.log(new Date(2024,4,0));

let currentdate= new Date();
let year= currentdate.getFullYear();
let month=currentdate.getMonth()+1;

let contentList=[
{ content:'은행업무', date:'2024-5-7', color:'blue'},
{ content:'병원가기', date:'2024-5-10', color:'red'},
{ content:'학원가기', date:'2024-5-31', color:'yellow'},
{ content:'학원가기', date:'2024-5-7', color:'green'}

]

calprint();
function calprint(){
  // 1. 어디에
  let 어디에 = document.querySelector('#caltop > h5')
  // 2. 무엇을
  let 무엇을 = `${year}년 ${month}월`
  // 3. 출력
  어디에.innerHTML = 무엇을;
  //==================캘린더
  // 1. 어디에
  let calendar=document.querySelector('#calendar')
  // 2.무엇을
  let html='<div>일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>';
  // 1.year, month 변수에 저장된 날짜의 말일 구하기.
  let date = new Date(year,month,0); // 2024-05-31
  let endday=date.getDate();
  // 2.year, month 변수에 저장된 날짜의 1일 요일 구하기(1일 요일앞에공백)
  let date2=new Date(year, month-1,1);// 2024-05-01
  let startweek=date2.getDay(); console.log(startweek); // 0:일 1:월
  for(let b=1; b<=startweek; b++){
    html+=`<div></div>`
  }
    ; // 일 마다의 일정
    // * 1일부터 말일까지 반복문
    for( let day=1; day<=endday; day++){
      // * 현재 반복되고 있는 날짜의 형식(연-월-일)만들기
      let date3 = `${year}-${month}-${day}`; console.log(date3);
      
      let dayHtml=``
      
      for(let i=0; i<contentList.length; i++){
        console.log(contentList[i].date==date3);
        if(contentList[i].date == date3){
          dayHtml+=`<div style="background-color:${contentList[i].color}">${contentList[i].content}</div>`
        }
      }
      html+=`<div onclick="memo( '${date3}')" >${day} ${dayHtml}</div>`
    }
    calendar.innerHTML=html;
}

function memo( date ){console.log('memo()'+date);
  let modal = document.querySelector('#memo')
  
  modal.innerHTML=`<div >
                    <h3>일정추가</h3>
                    <input id="memocont" type="text"/>
                    <input id="memocolor" type="color"/>
                    <button onclick="add( '${date}' )">등록</button>
                    <button onclick="cccc(  )">닫기</button>
                  </div>`

  modal.style.display = 'block'

}


function add(memodate){

  let memocont = document.querySelector('#memocont').value
  let memocolor=document.querySelector('#memocolor').value
  memoadd={content: memocont, date: memodate, color: memocolor};
  contentList.push(memoadd);

  calprint();
  cccc();

}

function cccc(){
  let modal = document.querySelector('#memo');
  modal.style.display = 'none'
}






// 2. 월 변경함수 : 실행조건 : 화살표 클릭했을때
function monthchange(x){
  console.log('monthchange()');

  if(x==0){
    month=month-1; if(month==0){month=12; year=year-1}
  }else if(x==1){
    month=month+1; if(month==13){month=1; year=year+1}
  }
  calprint();
}



