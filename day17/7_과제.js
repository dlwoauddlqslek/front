let product=[];
let order=[];
let o=1;
/*let date=new Date();
  let year=date.getFullYear();
  let month=date.getMonth()+1;
  let day=date.getDate();
  let hour=date.getHours();
  let minute=date.getMinutes();
  let second=date.getSeconds();
let ordertime=`${year}-${month}-${day} ${hour}:${minute}:${second}`;
console.log(ordertime);*/
function add(){
  let name=document.querySelector('#name').value
  let price=document.querySelector('#price').value
  let addlist={n: name, p: price};
  product=JSON.parse(localStorage.getItem('product'));
  console.log(product);
  if(product==null){product=[];}
  
  product.push(addlist);
  console.log(product);

  localStorage.setItem('product', JSON.stringify(product));
  console.log(localStorage.getItem('product'));
}

function autoorder(){console.log('autoorder()');
  product=JSON.parse(localStorage.getItem('product'))
  let date=new Date();
  let year=date.getFullYear();
  let month=date.getMonth()+1;
  let day=date.getDate();
  let hour=date.getHours();
  let minute=date.getMinutes();
  let second=date.getSeconds();
  let ordertime=`${year}-${month}-${day} ${hour}:${minute}:${second}`;
  let i=parseInt(Math.random()*product.length); console.log(i);
  console.log(product);
  let orderlist={num:o++, n:product[i].n, p:product[i].p, time:ordertime };console.log(orderlist);
  order.push(orderlist); console.log(order);
  let noworder=document.querySelector('#noworder');
  let html='';
  for(j=0; j<order.length; j++){
  html+=`<tr>
          <th>${order[j].num}</th>
          <td>${order[j].n}</td>
          <td>${order[j].p}</td>
          <td>${order[j].time}</td>
        </tr>`
        
  }
  console.log(html);
  noworder.innerHTML=html;
}

function auto(){
  setInterval(autoorder,3000)
}
