let todo=[
];



function uploadItem(){
  let item = document.querySelector('#item').value
  listitem={do: item, style: false }
  console.log(todo);
  console.log(localStorage.getItem('할일'));
  todo=JSON.parse(localStorage.getItem('할일'));
  console.log(todo);

  if(todo==null){todo=[];};
  console.log( todo );
  
  todo.push(listitem);

  console.log( todo );

  localStorage.setItem('할일', JSON.stringify(todo));
  
  print();
  
}

print();
function print(){
  
  todo=JSON.parse(localStorage.getItem('할일'));
  if(todo==null){todo=[];};
  
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
  localStorage.setItem('할일', JSON.stringify(todo));
  print();
  
}

function change(x){
  todo[x].style=!todo[x].style;
  localStorage.setItem('할일', JSON.stringify(todo));
  print();
  
  
}
