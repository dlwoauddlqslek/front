

let 카테고리목록=[
  { cno:1, cname:'삼성전자'},{ cno:2, cname:'LG전자'}
]
let 게시물목록=[
  { bno:1, btitle:'오르락', bcontent:'좋아요', bpassword:'1234', bdate: '2024-05-28', cno:1},
  { bno:2, btitle:'내리락', bcontent:'실허요', bpassword:'4567', bdate: '2024-05-27', cno:1}
]
let 댓글목록=[
  { rno:1, rcontent:'좋아요', rdate: '2024-05-28', bno:1},
  { rno:2, rcontent:'싫어요', rdate: '2024-05-28', bno:2},
  { rno:3, rcontent:'이런', rdate: '2024-05-29', bno:2}
]
// 1. 1번 게시물의 댓글 출력해보자.
let clickBno =1;
for(let i=0; i<댓글목록.length; i++){ // 댓글목록 모두 순회
  // 조건: 1번 게시물만.
  if(댓글목록[i].bno==clickBno){
    console.log(댓글목록[i]);
  }
}

// 2. 삼성전자의 게시물과 댓글 출력해보자.
let clickCno=1;
for(let i=0; i<게시물목록.length; i++){
  if(게시물목록[i].cno==clickCno){
    console.log(게시물목록[i]);
    console.log('-------------------------')

    for(let j=0; j<댓글목록.length; j++){
      if(게시물목록[i].bno==댓글목록[j].bno){
        console.log(댓글목록[j]);
      }
    }
    console.log('-----------------------------');
  }
}
