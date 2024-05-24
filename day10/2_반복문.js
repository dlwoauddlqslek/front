// 1. 사용자가 입력한 번호 목록/배열
let 입력번호목록 = []
// 2. 자동 생성된 번호 목록/배열
let 추첨번호목록 =[]

// 3. 6개의 수를 입력받아 입력번호목록에 저장
  //1. 조건 : 숫자만 가능 , 1~45 사이의 숫자만 가능, 중복제외
  
  for(let i=1; i<=6; i++){
    let 입력번호 = Number(prompt(`${i}번째 숫자 입력`)); // 3-1입력받고 변수에 저장한다.
    // Number(데이터) : 숫자타입 변환 함수, 만일 문자이면 NaN, 공백이면 0
    // NaN(not a number) : NaN는 비교연산이 불가능 하므로 isNaN(데이터)함수를 사용
      // isNaN(데이터/변수) : 숫자가 아니면 true 숫자이면 false
    // 조건1
      // 만약에 입력된 번호가 1보다 작고 45보다 크면 취소
    if(입력번호 <1 || 입력번호>45 || isNaN(입력번호)){
      alert('선택할 수 없는 번호입니다.')
      i--; continue; // 현재 i값의 -1 차감하고 다시 for문의 증감식으로 이동
    }

    // 조건2
      //입력번호가 이미 배열에 존재하면 취소
    if( 입력번호목록.indexOf(입력번호) != -1){
      alert('이미 선택한 번호입니다.');
      i--;continue;
    }

    입력번호목록.push(입력번호);                 // 3-2입력받은 데이터를 배열에 저장한다.
  } // for end



// 4. 6개의 수를 난수/임의 생성해서 추첨번호목록 에 저장
  // 조건 : 1~45 사이의 숫자만 가능, 중복제외
  for(let i=1; i<=6; i++){
    // 1. 난수 생성한다.
      //Math.random(); 0부터 1미만의 실수 생성
      //Math.random()*난수범위개수+시작번호
    //let 생성번호 = Math.random()+1; //1부터 2미만의 실수 생성
    //let 생성번호 = Math.random()*45+1; //1부터 46미만의 실수 생성
    let 생성번호 = parseInt(Math.random()*45+1);
    // 조건1
    if(추첨번호목록.indexOf>=0){
      i--;continue;
    }
    // 2. 생성된 난수를 배열에 저장한다
    추첨번호목록.push(생성번호);
  
  }
// 5. 두 배열의 동일한 숫자가 몇개인지 체크
let 동일개수 = 0;
for(let i=0; i<=입력번호목록.length-1; i++){
  if(추첨번호목록.indexOf(입력번호목록[i]) !=-1){
    동일개수++;
  }
}


// 6. 출력
document.querySelector('#입력번호목록').innerHTML = 입력번호목록;
document.querySelector('#추첨번호목록').innerHTML = 추첨번호목록;
document.querySelector('#동일개수').innerHTML = 동일개수;



