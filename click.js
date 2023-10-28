let box=document.getElementById
('box');
let clickCount= document.getElementById
('click-count');
count=0;
box.addEventListener('click',function()
{
count++;
console.log(count);
clickCount.innerText=count+" "
})
