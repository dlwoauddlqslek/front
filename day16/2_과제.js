let todo=[{do: '1교시수업듣기', style: false},
{do: '밥먹기', style: true},
{do: '공부하기', style: true}
];



function uploadItem(){
  let item = document.querySelector('#item').value
  
  listitem={do: item, style: false }
  todo.push(listitem)
  
  print();
  
}

print();
function print(){
  let upload=document.querySelector('#list')
  let html='';
  for(i=0; i<todo.length; i++){
  html+=`<li class=${todo[i].style ? 'black' : 'white'}>
          <div>${todo[i].do}</div>
          <div>
            <button onclick="change(${i})" type="button">변경</button>
            <button onclick="_delete(${i})" type="button">삭제</button>
          </div>
        </li>`
  };
  upload.innerHTML=html;
}


function _delete(x){
  todo.splice(x,1)
  print();
  
}

function change(x){
  todo[x].style=!todo[x].style;
  print();
  
  
}
